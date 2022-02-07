import React, { useEffect, useState } from "react";
import Sidebar from "../compononets/Sidebar";
import Form from "../compononets/Form";
import Trips from "../compononets/Trips";
import Alert from "../compononets/Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
const Tripslist = () => {
  const [trips, setTrips] = useState(getLocalStorage());
  const [alert, setAlert] = useState({});
  const [isEditing, setIsEditing] = useState({ value: false, item: {} });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(trips));
  }, [trips]);

  const handleDeleteTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  const handleEditTrip = (id) => {
    const specificItem = trips.filter((trip) => trip.id === id);
    setIsEditing({ value: true, item: specificItem });
  };
  return (
    <div className="container">
      <main>
        <Alert />
        <Form
          setTrips={setTrips}
          trips={trips}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <section className="trips-section">
          {trips.map((trip) => (
            <Trips
              key={trip.id}
              {...trip}
              handleDeleteTrip={handleDeleteTrip}
              handleEditTrip={handleEditTrip}
            />
          ))}
        </section>
      </main>

      <Sidebar />
    </div>
  );
};

export default Tripslist;
