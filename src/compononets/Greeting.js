import React from "react";
import hello from "../assets/hello.svg";

export default function Greeting({ user, isUser }) {
  return (
    <div className="main__title">
      <img src={hello} alt="" />
      <div className="main__greeting">
        {isUser && user.name && (
          <h1>
            Welcome, <strong>{user.name.toUpperCase()}</strong>
          </h1>
        )}
        <p>Welcome to your Trip Planner</p>
      </div>
    </div>
  );
}
