import React, { useEffect, useState } from "react";
import "./App.css";
import members from "./utils/members";
const areas = Object.keys(members);
function App() {
  return (
    <>
      <header></header>
      <div className="title">
        <h1>Exposed members</h1>
      </div>
      <div className="container">
        {areas.map((area) =>
          members[area].map((member) => {
            let img = new Image();
            img.src = require(`./assets/${area}/${member.url}`);
            const imgWidth = img.width;
            console.log(member.name, imgWidth);

            return (
              <div className="memeber-content">
                <img
                  src={require(`./assets/${area}/${member.url}`)}
                  alt="member"
                />
                <div
                  className="member-info"
                  style={{
                    width: imgWidth >= 610 ? "200px" : "165px",
                  }}
                >
                  <p className="name">{member.name}</p>
                  <p className="exposed">{member.exposed}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
