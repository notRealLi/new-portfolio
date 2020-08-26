import React from "react";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow.svg";
import { NavLink } from "react-router-dom";

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
          <NavLink to={process.env.PUBLIC_URL + "/about"} exact>
            <p>More about me</p>
            <RightArrow className="right-arrow" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
