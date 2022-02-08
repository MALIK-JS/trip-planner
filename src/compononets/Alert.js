import React from "react";
import { useEffect } from "react";

function Alert({ msg, type, removeAlert, trips }) {
  useEffect(() => {
    const timeOutID = setTimeout(() => removeAlert(false), 3000);
    return () => clearTimeout(timeOutID);
  }, [trips]);

  return (
    <div className={`alert ${type}`}>
      <div className="alert__message">
        <p>{msg}</p>
      </div>
    </div>
  );
}

export default Alert;
