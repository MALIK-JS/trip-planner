import Greeting from "../compononets/Greeting";
import Cards from "../compononets/Cards";
import Chart from "../compononets/Chart";
import Sidebar from "../compononets/Sidebar";
import { useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const Dashboard = () => {
  const [trips, setTrips] = useState(getLocalStorage());
  return (
    <div className="container">
      <main>
        <div className="main__container">
          <Greeting />
          <Cards />
          <Chart />
        </div>
      </main>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
