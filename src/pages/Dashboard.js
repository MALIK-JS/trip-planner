import Greeting from "../compononets/Greeting";
import Cards from "../compononets/Cards";
import Chart from "../compononets/Chart";
import Sidebar from "../compononets/Sidebar";
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

export const dataContext = React.createContext();
const obj = { id: 0, value: "active_menu_link" };
const Dashboard = () => {
  const { isAuthenticated, logout, user } =
    useAuth0();
  const isUser = isAuthenticated && user;

  const triggerLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const [trips, setTrips] = useState(getLocalStorage());
  return (
    <dataContext.Provider value={trips}>
      {/* <button onClick={loginWithRedirect}>LOGIN</button> */}
      <div className="container">
        <main>
          <div className="main__container">
            <Greeting user={user} isUser={isUser} />
            <Cards />
            <Chart />
          </div>
        </main>
        <Sidebar {...obj} triggerLogout={triggerLogout} />
      </div>
    </dataContext.Provider>
  );
};

export default Dashboard;
