import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';

import User, { UserDocument } from '../models/User';

const router = express.Router();

//  @router     POST api/users
//  @desc       Register a User
//  @access     Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid Email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('mobile', 'please enter a number of 10 digit').isNumeric().isLength({min:10, max:10}),
    check('username', 'please enter username').not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      console.log(req.body)
      const { name, email, username, mobile, password } = req.body;

      let user: UserDocument | null = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists.' });
      }

      user = new User({ name, email, username, mobile, password });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        // config.get<string>('jwtSecret'),
        "top_secret",
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error((err as Error).message);
      res.status(500).send('Server Error');
    }
  }
);

export default router;
