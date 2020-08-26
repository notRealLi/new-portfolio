import React, { useEffect } from "react";
import gsap from "gsap";
import Footer from "../components/footer";
import About from "../components/about";
import Overlay from "../components/overlay";

const AboutPage = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".overlay", 0.9, {
      height: "90vh",
      ease: "none",
    }).to(".overlay", 0.4, {
      height: 0,
      ease: "power2.out",
      delay: -0.4,
    });
  }, []);

  return (
    <>
      <Overlay />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
