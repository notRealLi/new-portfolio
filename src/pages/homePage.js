import React, { useEffect } from "react";
import gsap from "gsap";
import Banner from "../components/banner";
import Projects from "../components/projects";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Overlay from "../components/overlay";

const HomePage = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".overlay", 0.9, {
      height: "90%",
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
      <Banner />
      <Projects />
      <Carousel />
      <Footer />
    </>
  );
};

export default HomePage;
