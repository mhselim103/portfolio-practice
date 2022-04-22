import React from "react";
import Card from "../Card/Card";
import "./Services.css";
import heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import resume from "./resume.pdf";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      {/* right side  */}
      <div className="cards">
        <div style={{ left: "20rem" }}>
          <Card
            emoji={heart}
            heading={"Design"}
            detail={"Figma, Photoshop, Adobe Xd, Sketch"}
          ></Card>
        </div>
        <div style={{ top: "12rem", left: "-2rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript,React, Node Js"}
          ></Card>
        </div>
        <div style={{ top: "19rem", left: "16rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail="Lorem ispum is simpley dummy text of printing of printing Lorem"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
