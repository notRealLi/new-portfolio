import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrollTop, setScrollTop] = useState(window.scrollY);

  useEffect(() => {
    window.onscroll = () => {
      window.onscroll = () => {
        setScrollTop(window.scrollY);
      };
    };
  }, []);

  return (
    <div className="header-full">
      <div className="container">
        <header className={scrollTop > 50 ? "scrolling" : ""}>
          <div className="logo">
            <NavLink to="/" exact>
              YL
            </NavLink>
          </div>
          <div className="header-nav">
            <a
              href="https://github.com/notRealLi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/notrealli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a
              href="https://notrealli.github.io/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-alt fa-2x"></i>
            </a>
            <a
              href="https://www.kaggle.com/notrealli/notebooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-kaggle fa-2x"></i>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
