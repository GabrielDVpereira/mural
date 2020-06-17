import React from "react";
import "./App.css";
import members from "./utils/members";
function App() {
  const areas = Object.keys(members);

  return (
    <>
      <header></header>
      <div className="title">
        <h1>Exposed members</h1>
      </div>
      <div className="container">
        {areas.map((area) =>
          members[area].map((member) => (
            <div className="memeber-content">
              <img src={require(`./assets/${area}/${member.url}`)} />
              <div className="member-info">
                <p className="name">{member.name}</p>
                <p className="exposed">{member.exposed}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
