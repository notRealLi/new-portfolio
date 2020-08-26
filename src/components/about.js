import React from "react";
import { ReactComponent as LeftArrow } from "../assets/images/left-arrow.svg";

const About = () => {
  return (
    <div className="container">
      <section className="about-me">
        <h1>About me</h1>
        <p>
          Hello there. My name is Yunwei Li but I go by Li. I’m a Full Spectrum
          Developer with a focus on JavaScript-based frameworks and libraries. I
          love learning about real world problems from different business fields
          and building tools with various technologies to solve them. I’m also
          very interested in Artificial Intelligence, Game Development and
          Finance, and I try to learn as much as I can to stay on top of those
          topics.
        </p>
        <p>
          I came to Canada in 2014 to study Computer Science at{" "}
          <a href="https://carleton.ca/" target="_blank">
            Carleton University
          </a>{" "}
          and I got my Bachelor’s degree in 2019. During the 5 years, I was very
          fortunate to have met and learned from a lot of like-minded, ambitious
          and talented people, some of whom became my partners in crime and
          we've had tons of great experiences together, including founding the
          first{" "}
          <a href="https://www.facebook.com/carletonaisociety/" target="_blank">
            Artificial Intelligence Club
          </a>{" "}
          at my university. I’ve also got to intern at a number of awesome
          organizations. My first Co-op term at{" "}
          <a href="https://pythian.com/" target="_blank">
            Pythian
          </a>
          really put my C language skills to test.{" "}
          <a href="https://www.payments.ca/" target="_blank">
            Payments Canada
          </a>{" "}
          gifted me with two things, the chance to sharpen my SQL skills and a
          keen interest in Finance.{" "}
          <a
            href="https://www.ibm.com/ca-en/products/cognos-analytics"
            target="_blank"
          >
            IBM Cognos Analytics
          </a>{" "}
          was where I fell in love with web development and it gave me a head
          start in the field. Finally at{" "}
          <a href="https://cdhstudio.ca/" target="_blank">
            CDH Studio
          </a>
          , I’ve had the pleasure to create a commercial web application from
          scratch. I can say with the utmost confidence that the time I spent at
          these awesome places has all contributed greatly to my personal and
          professional development.
        </p>
        <p>
          When I’m not coding, you can usually find me playing games, trying out
          new restaurants or occasionally having a drink with friends.
        </p>
        <a href={process.env.PUBLIC_URL + "/"} className="back-to-home">
          <LeftArrow className="left-arrow" />
          <p>Back to home</p>
        </a>
      </section>
    </div>
  );
};

export default About;
