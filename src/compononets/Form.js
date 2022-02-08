import React, { useEffect, useState } from "react";
import Countryinput from "./Countryinput__";
import Alert from "../compononets/Alert";

const url = "https://restcountries.com/v2/name/";

export default function Form({ setTrips, trips, isEditing, setIsEditing }) {
  const [fromwhere, setFromWhere] = useState("FROM");
  const [fromto, setFromTo] = useState("TO");
  const [godate, setGoDate] = useState("");
  const [backdate, setBackDate] = useState("");
  const [budget, setBudget] = useState(0);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    if (isEditing.value) {
      const { from, to, godate, backdate, budget } = isEditing.item[0];
      setFromWhere(from);
      setFromTo(to);
      setGoDate(godate);
      setBackDate(backdate);
      setBudget(budget);
    }
  }, [isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //handle editing
    const newItem = isEditing.item[0];
    if (isEditing.value) {
      const output = trips.map((trip) => {
        if (trip.id === isEditing.item[0].id) {
          return {
            ...trip,
            from: fromwhere,
            to: fromto,
            godate: godate,
            backdate: backdate,
            budget: budget,
          };
        }
        return trip;
      });
      setTrips(output);
      setIsEditing({ value: false, item: {} });
      resetForm();
      showAlert(true, "THE TRIP HAS BEEN EDITED SUCCESSFULLY", "Success");
      return;
    } else {
      if (fromwhere && fromto && godate && backdate && budget) {
        try {
          const response = await fetch(`${url}${fromto}`);
          const info = await response.json();
          const { flags, languages } = await info[0];
          setTrips([
            ...trips,
            {
              id: new Date().getTime().toString(),
              from: fromwhere,
              to: fromto,
              godate: godate,
              backdate: backdate,
              budget: budget,
              destfalg: flags.png,
              language: languages[0].name,
            },
          ]);
          showAlert(true, "THE TRIP HAS BEEN ADDED SUCCESSFULLY", "Success");
          resetForm();
        } catch (e) {
          console.error(e);
        }
      } else {
        showAlert(true, "MAKE SURE TO FILL ALL THE INPUTS", "Danger");
      }
    }
  };

  const resetForm = () => {
    setFromWhere("FROM");
    setFromTo("TO");
    setGoDate("");
    setBackDate("");
    setBudget(0);
  };

  const showAlert = (show = false, msg = "", type = "") =>
    setAlert({ show, msg, type });

  return (
    <>
      {alert.show && <Alert {...alert} removeAlert={showAlert} trips={trips} />}
      <div className="forms">
        <form>
          <div className="sub_form">
            <Countryinput setFromWhere={setFromWhere} value={fromwhere} />
            <Countryinput setFromWhere={setFromTo} value={fromto} />
            <input
              type="date"
              value={godate}
              onChange={(e) => {
                setGoDate(e.target.value);
              }}
            />
            <input
              type="date"
              value={backdate}
              onChange={(e) => {
                setBackDate(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="budget"
              value={budget}
              onChange={(e) => {
                setBudget(e.target.value);
              }}
            />
          </div>
          <div className="sub_form_btn">
            <button type="submit" className="btn" onClick={handleSubmit}>
              {isEditing.value ? "EDIT TRIP" : "ADD TRIP"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
