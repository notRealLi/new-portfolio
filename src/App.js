import React from "react";
import "./styles/App.scss";
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
  return (
    <>
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
