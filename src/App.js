import React, { useEffect } from "react";
import "./styles/App.scss";
import gsap from "gsap";
import Header from "./components/header";
import Banner from "./components/banner";
import Projects from "./components/projects";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Overlay from "./components/overlay";

function App() {
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
    <div className="App">
      <Overlay />
      <Header />
      <Banner />
      <Projects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
