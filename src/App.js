import React, { useEffect } from "react";
import "./styles/App.scss";
import gsap from "gsap";
import { Route } from "react-router-dom";
import Overlay from "./components/overlay";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";

const routes = [
  { path: "/", name: "homepage", Component: HomePage },
  { path: "/about", name: "aboutpage", Component: AboutPage },
];

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
        {routes.map(({ path, name, Component }) => (
          <Route key={name} exact path={process.env.PUBLIC_URL + path}>
            <Component />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
