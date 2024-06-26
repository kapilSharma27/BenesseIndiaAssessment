import { SET_ALERT, REMOVE_ALERT } from "../types";

interface Alert {
  id: number;
  message: string;
}

interface AlertAction {
  type: string;
  payload?: any;
}

const alertReducer = (state: Alert[], action: AlertAction): Alert[] => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default alertReducer;