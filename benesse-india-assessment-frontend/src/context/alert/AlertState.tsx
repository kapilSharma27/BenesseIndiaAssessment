import React, { useReducer, ReactNode } from "react";
import * as uuid from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer"; // Importing the alert reducer

interface Alert {
  id: number;
  message: string;
}

// interface State {
//   alerts: Alert[];
// }

interface Props {
  children?: ReactNode;
}

const AlertState: React.FC<Props> = ({ children }: Props) => {
    const initialState: any = [];
  
  const [state, dispatch] = useReducer(alertReducer, initialState); // Using the alert reducer here

  // Set Alert
  const setAlert = (message: string,type: string, timeout: number = 5000) => {
    const id = uuid.v4();
    dispatch({ type: "SET_ALERT", payload: {message, type , id } }); // Dispatching SET_ALERT action

    setTimeout(() => dispatch({ type: "REMOVE_ALERT", payload: id }), timeout); // Dispatching REMOVE_ALERT action after timeout
  };

  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
