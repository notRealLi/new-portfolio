import React, { useEffect } from "react";
import "./styles/App.scss";
import gsap from "gsap";
import Overlay from "./components/overlay";
import Header from "./components/header";
import HomePage from "./pages/homePage";

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
    <>
      <Overlay />
      <Header />
      <div className="App">
        <HomePage />
      </div>
    </>
  );
}

export default App;
