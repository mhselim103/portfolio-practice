import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/intro-removebg-preview.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I Am</span>
          <span>Mahmudul Selim</span>
          <p>
            Front-end developer with the high level of experience in web
            development and designing,producting the Quality work.
          </p>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18.5rem", left: "15%" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
