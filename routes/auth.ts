import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import auth from '../middleware/auth';
import { check, validationResult } from 'express-validator';
import DecodedUser from '../middleware/auth';

import User, { UserDocument } from '../models/User';

const router = Router();
// type DecodedUser = {
//     id: string;
//     // Other properties if any...
//   };


//  @router     GET api/auth
//  @desc       Get logged in user
//  @access     Private
router.get("/", auth, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user?.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send("Server Error");
  }
});

//  @router     GET api/auth
//  @desc       Auth user & get token
//  @access     Public
router.post(
  "/",
  [
    check("email", "Please include a Valid email").isEmail(),
    check("password", "Password Required").exists(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user: UserDocument | null = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials." });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        // config.get<string>("jwtSecret"),
        "top_secret",
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error((err as Error).message);
      res.status(500).send("Server Error");
    }
  }
);

export default router;
