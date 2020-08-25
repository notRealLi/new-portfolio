import React from "react";
import { ReactComponent as Mail } from "../assets/images/mail.svg";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <p>Copyright © 2020</p>
        <div className="contact">
          <a href="tel:343-262-6814" className="cell">
            343.262.6814
          </a>
          <a href="mailto:liyunwei10@gmail.com" className="mail">
            liyunwei10@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
