import React from "react";
import Banner from "../components/banner";
import Projects from "../components/projects";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Projects />
      <Carousel />
      <Footer />
    </>
  );
};

export default HomePage;
