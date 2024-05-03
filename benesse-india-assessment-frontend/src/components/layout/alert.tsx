import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
// import { Alert } from "../../context/alert/types"; // Assuming the type for alert is defined in types.ts or a similar file

const Alerts: React.FC = () => {
  const alertContext = useContext(AlertContext);

  return (
    <>
      {alertContext.alerts.length > 0 &&
        alertContext.alerts.map((alert: any) => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle" /> {alert.message}
          </div>
        ))}
    </>
  );
};

export default Alerts;