import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import  { AuthContext, AuthContextType } from "../../context/auth/authContext";
import { RouteComponentProps } from "react-router-dom";

const Register: React.FC<RouteComponentProps> = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext : AuthContextType = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already Exists.") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    password: "",
    password2: "",
  });

  const { name, email, username, mobile, password, password2 } = user;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields.", "danger");
    } else if (password !== password2) {
      setAlert("Password do not Match", "danger");
    } else {
      register({ name, email, username, mobile, password });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={mobile}
            onChange={onChange}
            placeholder="Mobile"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
            minLength={6}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Repeat Password"
            required
            minLength={6}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
