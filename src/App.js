import React from "react";
import "./App.css";
import members from "./utils/members";
const areas = Object.keys(members);
function App() {
  return (
    <>
      <header>
        <img src={require("./assets/mural.png")} alt="mural" />
      </header>
      <div className="title">
        <h1>Exposed dos membros 1/2020</h1>
      </div>
      <div className="container">
        {areas.map((area) =>
          members[area].map((member) => {
            let img = new Image();
            img.src = require(`./assets/${area}/${member.url}`);
            const imgWidth = img.width;
            console.log(member.name, imgWidth);
            let member_area;
            if (member.name == "Douglas") {
              member_area = "Mascote";
            } else if (area == "direcao_de_arte") {
              member_area = "Direção de arte";
            } else if (area == "Redacao") {
              member_area = "Redação";
            } else if (area == "Producao") {
              member_area = "Produção";
            } else {
              member_area = area;
            }
            return (
              <div className="memeber-content">
                <div
                  className="member-info"
                  style={{
                    width: imgWidth >= 610 ? "200px" : "165px",
                  }}
                >
                  <p className="area">{member_area}</p>
                  <p className="name">{member.name}</p>
                  <p className="exposed">{member.exposed}</p>
                </div>
                <img
                  src={require(`./assets/${area}/${member.url}`)}
                  alt="member"
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
