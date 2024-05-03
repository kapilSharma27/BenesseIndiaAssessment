import { createContext } from "react";

interface Alert {
    id: number;
    message: string;
  }
  
interface AlertContextType {
    alerts: Alert[];
    setAlert: (message: string, type: string, timeout?: number) => void;
}


const AlertContext = createContext<AlertContextType >(
  {
    alerts: [],
    setAlert: () => {}
  }
);

export default AlertContext;