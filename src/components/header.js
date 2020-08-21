import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">YL</div>
      <div className="header-nav">
        <a href="https://github.com/notRealLi" target="_blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/notrealli" target="_blank">
          <i className="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a href="https://notrealli.github.io/resume" target="_blank">
          <i className="fas fa-file-alt fa-2x"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
