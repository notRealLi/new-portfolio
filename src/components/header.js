import React, { useState, useEffect } from "react";

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
      </div>
    </div>
  );
};

export default Header;
