import React, { useReducer, ReactNode } from "react";
import axios from "axios";
import authReducer from "./authReducer";
import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../types";
import setAuthToken from "../../utils/setAuthToken";
import { AuthContext } from "./authContext";


interface Props {
  children?: ReactNode; // Declare children as optional
}

const AuthState:any = ({ children }: Props) => {
  const initialState: any = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { token, isAuthenticated, loading, user, error } = state;

  // Load User
  const loadUser = async (token = undefined) => {

    // @todo - load token into global headers
    console.log("TOKEN =====>", localStorage.getItem("token"), localStorage.token, token);
    if (token) {
      setAuthToken(token);
    }
    if(localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const register = async (formData: any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser(res.data.token);
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: (err as unknown as any).response.data.msg });
    }
  };

  // Login User
  const loginUser = async (formData: any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/auth", formData, config);
      // console.log(res.data.token)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser(res.data.token);
    } catch (err) {
      console.log((err as unknown as any).response.data.msg)
      // dispatch({ type: LOGIN_FAIL, payload: (err as unknown as any).response.data.msg });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        loading,
        user,
        error,
        loadUser,
        register,
        loginUser,
        logout,
        clearErrors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
