import Greeting from "../compononets/Greeting";
import Cards from "../compononets/Cards";
import Chart from "../compononets/Chart";
import Sidebar from "../compononets/Sidebar";
import React, { useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

export const dataContext = React.createContext();
const obj = { id : 0, value:"active_menu_link" };
const Dashboard = () => {
  const [trips, setTrips] = useState(getLocalStorage());
  return (
    <dataContext.Provider value={trips}>
      <div className="container">
        <main>
          <div className="main__container">
            <Greeting />
            <Cards />
            <Chart />
          </div>
        </main>
        <Sidebar {...obj}/>
      </div>
    </dataContext.Provider>
  );
};

export default Dashboard;
