import { createContext } from "react";

export interface AuthContextType {
  // Define your context properties and methods here
  isAuthenticated: boolean | null;
  loading: boolean | null;
  user: any;
  token: string | null;
  error: any;
  loadUser: () => void;
  register: (formData: any) => void;
  loginUser: (formData: any) => void;
  logout: () => void;
  clearErrors: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: null,
  loadUser: () => {},
  register: (formData: any) => {},
  loginUser: (formData: any) => {},
  logout: () => {},
  clearErrors: () => {},
});

// import { createContext } from "react";

// interface AuthContextType {
//   // Define your context properties and methods here
//   isAuthenticated: boolean;
//   loading: boolean;
//   user: any;
//   token: string | null;
//   error: any;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export default AuthContext;
