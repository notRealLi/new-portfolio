import React from "react";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow.svg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <p className="bio">
          Hi there{" "}
          <span className="waving-hand" role="img" aria-label="emoji">
            👋
          </span>{" "}
          I'm Li. I'm a Full Spectrum Developer. I take pleasure in creating
          tools with various technologies to make your life easier{" "}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </p>

        <div className="about">
          <NavLink to="/about" exact>
            <p>More about me</p>
            <RightArrow className="right-arrow" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
