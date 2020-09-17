import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="contact">
          <h2>Please feel free to shoot me an email or a message 😉</h2>
          <div className="contact-info">
            <div className="info">
              <i class="fas fa-phone"></i>
              <a href="tel:343-262-6814">343.262.6814</a>
            </div>
            <div className="info">
              <i class="fas fa-envelope"></i>
              <a href="mailto:liyunwei10@gmail.com" className="mail">
                liyunwei10@gmail.com
              </a>
            </div>
          </div>
        </div>
        <p>© Yunwei Li. 2020</p>
      </footer>
    </div>
  );
};

export default Footer;
