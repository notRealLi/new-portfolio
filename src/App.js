import React from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
