import React from "react";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow.svg";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <p className="bio">
          Hi there <span className="waving-hand">👋</span> I'm Li. I'm a full
          stack web developer. I'm also interested in Artificial Intelligence
          and Game Development.
        </p>

        <div className="about">
          <a>
            <p>More about me</p>
            <RightArrow className="right-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
