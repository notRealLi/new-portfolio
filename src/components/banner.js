import React from "react";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow.svg";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <p className="bio">
          Hi there <span className="waving-hand">👋</span> I'm Li. I'm a Full
          Spectrum Developer developer. I take pleasure in creating tools with
          various technologies to make your life easier 😊
        </p>

        <div className="about">
          <a href={process.env.PUBLIC_URL + "/about"}>
            <p>More about me</p>
            <RightArrow className="right-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
