import React from "react";

const projects = [
  {
    name: "Mirror Mirror",
    type: "Personal",
    description:
      "A web app created with Next.js that performs NLP analysis on underlined topics",
    links: [
      { text: "Code", url: "https://github.com/notRealLi/Mirror-Mirror" },
      { text: "Demo", url: "https://mirror-mirror.vercel.app/" },
    ],
    image: "mirror.png",
  },
  {
    name: "Candy",
    type: "Personal",
    description: "A website created with Gatsby and Framer Motion",
    links: [
      { text: "Code", url: "https://github.com/notRealLi/gatsby_demo_heyday" },
      { text: "Demo", url: "https://notrealli.github.io/gatsby_demo_heyday/" },
    ],
    image: "candy.png",
  },
  {
    name: "Ruby",
    type: "Personal",
    description: "A website created with React and GSAP",
    links: [
      { text: "Code", url: "https://github.com/notRealLi/swiftcore/" },
      { text: "Demo", url: "https://notrealli.github.io/swiftcore/" },
    ],
    image: "ruby.png",
  },

  {
    name: "Ratios",
    type: "Personal",
    description:
      "A web-based application that displays stock information created with React and Express",
    links: [
      { text: "Code", url: "https://github.com/notRealLi/ratios" },
      { text: "Demo", url: "https://rati0s.herokuapp.com/" },
    ],
    image: "ratios.png",
  },
  {
    name: "Javis",
    type: "Professional",
    description: "A web-based room-booking application created with AdonisJs",
    links: [{ text: "Code", url: "https://github.com/CDH-Studio/Jarvis" }],
    image: "jarvis.png",
  },
];

const Projects = () => {
  return (
    <div className="container">
      <section className="projects">
        <div className="title">
          <span></span>
          <h2>Featured Projects</h2>
        </div>
        {projects.map((project, idx) => (
          <div
            className={project.links.length > 1 ? "project demo" : "project"}
            key={idx}
          >
            <div className="project-info">
              <div className="project-title">
                <h3>{project.name}</h3>

                <a
                  href={project.links[0]["url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>

              <div className="project-description">
                <h4>{project.description}</h4>
              </div>
            </div>

            <div className="project-image">
              <img
                src={require(`../assets/projects/${project.image}`)}
                alt=""
              />
              {project.links.length > 1 && (
                <div className="demo">
                  <a
                    href={project.links[1]["url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Here
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
