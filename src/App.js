import React from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Projects from "./components/projects";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Projects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
