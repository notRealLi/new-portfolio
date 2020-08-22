import React from "react";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow.svg";

const Banner = () => {
  return (
    <div className="banner">
      <p className="bio">
        Hi there <div className="waving-hand">👋</div> My name is Li. I'm a full
        stack developer. I'm also interested in AI and Game Development.
      </p>

      <div className="about">
        <a>
          <p>More about me</p>
          <RightArrow className="right-arrow" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
