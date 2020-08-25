import React, { useEffect } from "react";
import Flickity from "flickity";

const projects = [
  {
    name: "AI Ants",
    description: "Created with p5js",
    image: "ant.jpg",
    demo: "https://notrealli.github.io/ant-colony-p5js/",
    github: "https://github.com/notRealLi/ant-colony-p5js",
  },
  {
    name: "3D Raycasting",
    description: "Created with p5js",
    image: "raycasting.png",
    demo: "https://notrealli.github.io/raycasting/",
    github: "https://github.com/notRealLi/raycasting",
  },
  {
    name: "Portfolio Site",
    description: "Created with HTML/Sass",
    image: "portfolio.png",
    demo: "https://notrealli.github.io/old-portfolio/",
    github: "https://github.com/notRealLi/old-portfolio",
  },
  {
    name: "Games",
    description: "Created with Processing",
    image: "processing.jpg",
    demo: "https://www.openprocessing.org/user/220169/#sketches",
    github: "https://github.com/notRealLi/Small-Games",
  },
  {
    name: "Pixel Game",
    description: "Created with Godot",
    image: "godot.png",
    demo: "https://notrealli.github.io/godot/",
    github: "https://github.com/notRealLi/godot",
  },
];

const Carousel = () => {
  useEffect(() => {
    const carousel = new Flickity(".carousel", {
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      watchCSS: true,
      draggable: false,
    });
  }, []);

  return (
    <div className="container">
      <section className="more-projects">
        <div className="title">
          <span></span>
          <h2>More Projects</h2>
        </div>

        <div className="carousel">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image">
                <img
                  src={require(`../assets/projects/${project.image}`)}
                  alt=""
                />
              </div>
              <div className="project-profile">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-links">
                <div className="demo">
                  <a href={project.demo} target="_blank">
                    Demo
                  </a>
                </div>
                <div className="github">
                  <a href={project.github} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Carousel;
