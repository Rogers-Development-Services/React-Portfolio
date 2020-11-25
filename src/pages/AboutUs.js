import React from "react";
import "devicon";
import "../assets/styles/AboutUs.css";
import { Row, Col } from 'react-materialize';

const styles = {
  aStyles: {
    color: "#38b09a"
  },
  iStyles: {
    fontSize: "3.5rem"
  },
  skillColStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "auto"
  },
  skillRowStyle: {
    margin: "1.25rem"
  },
  textStyle: {
    display: "block",
    justifyContent: "flex-end"
  },
  footerStyle: {
    color: "#38b09a"
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  pStyle: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    fontSize: "3em"
  },
  p1Style: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    fontSize: "3em",
    animation: "tracking-in-expand .7s cubic-bezier(.215,.61,.355,1) both",
    animationDuration: "0.7s",
    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    animationDelay: "3s",
    animationIterationCount: "1",
    animationDirection: "normal",
    animationFillMode: "forwards",
    animationPlayState: "running",
    animationName: "tracking-in-expand"
  },
  p2Style: {

  },
  homeImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "url('https://www.vasa.org.uk/site-content/uploads/2018/07/web-in-development.jpg')no-repeat center",
    backgroundSize: "cover",
    backgroundColor: "rgba(0,0,0,.27)",
    backgroundBlendMode: "multiply",
    backgroundAttachment: "fixed",
    animation: "5s both",
    animationDuration: "5s",
    animationTimingFunction: "ease",
    animationDelay: "0s",
    animationIterationCount: "1",
    animationDirection: "normal",
    animationFillMode: "both",
    animationPlayState: "running",
    animationName: "bg-pan-top",
    height: "100vh",
    width: "100%"
  },
};

function AboutUs() {
  return (
    <div>
      <section style={styles.homeImage}>
        <div>
          <p style={styles.p1Style}>MATTHEW <span style={{ color: "#38b09a", marginLeft: "1rem" }}> ROGERS</span></p>
          <p style={styles.pStyle}><span style={{ color: "#38b09a", marginRight: "1rem" }}>Full Stack</span> Web Developer</p>
        </div>
      </section >

      <h2>ABOUT US</h2>
      <Row className="container">
        <Col
          className="black-text"
          s={12}
          l={6}
        >
          <img
            style={styles.imageStyle}
            src="https://user-images.githubusercontent.com/38272211/99867457-77214c80-2b6e-11eb-8c5b-4ba73f7c4c8a.png" alt="Rogers-Development-Services-Logo"></img>
        </Col>
        <Col
          className="black-text"

          s={12}
          l={6}
        >
          <p>
            Welcome to Rogers Development Services! My name is Matthew Shane Rogers and I’m an aspiring Web Developer.
            I am a native CA and have lived all around this wonderful state for the past thirty years.<br />
            <br />
            I’m currently enrolled in UCSD’s Full-Stack Web Development Bootcamp hosted by Trilogy Education Services.
            My hope is by learning from this course I will be equipped to either transition into a full time
            Full-Stack Web Developer position in San Diego (or remote) career or to become a freelance web designer. I
            hope to create usable, accessible, and beautiful web applications to service whatever my clients might
            need.<br />
            <br />
            My last career in leadership development taught me that whatever investment I need to make sure it solves a human problem and contributes to growth for the people involved. I strive to apply my learners posture in every developing project I contribute to.You can access my current resume <a href="https://github.com/Rogers-Development-Services/Portfolio/files/5578900/Bootcamp.Resume.pdf" target="_blank" style={styles.aStyles}>here</a>, I'm always open to learning about opportunties. Don't hesitate to reach out to <a href="mailto:matthew.shane.rogers@gmail.com" style={styles.aStyles}><i>matthew.shane.roges@gmail.com</i></a>!
            </p>
          <div>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col>
                <a target="blank" href="https://www.linkedin.com/in/matthewsrogers/" style={styles.aStyles}><i style={{ fontSize: "2rem" }} className="devicon-linkedin-plain"></i></a>
              </Col>
              <Col>
                <a target="_blank" href="https://github.com/Rogers-Development-Services" style={styles.aStyles}><i style={{ fontSize: "2rem" }} className="devicon-github-plain"></i></a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <section className="container" style={{ marginBottom: "5rem" }}>
        <h2>SKILLS</h2>
        <Row style={styles.skillRowStyle}>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-html5-plain-wordmark colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-css3-plain-wordmark colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-javascript-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-jquery-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-nodejs-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-react-plain colored"></i>
          </Col>
        </Row>
        <Row style={styles.skillRowStyle}>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-express-original colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-mysql-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-sequelize-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-mongodb-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-git-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.skillColStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-github-plain colored"></i>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default AboutUs;