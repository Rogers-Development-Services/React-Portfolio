import React from "react";
import "devicon";
import "../assets/styles/AboutUs.css";
import { Row, Col, Button, Icon } from 'react-materialize';

const styles = {
  iStyles: {
    fontSize: "3.5rem"
  },
  colStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "1.5rem"
  },
  textStyle: {
    display: "block",
    justifyContent: "flex-end"
  },
  footerStyle: {
    color: "38b09a"
  }
};

function AboutUs() {
  return (
    <div>
      <h2>ABOUT US</h2>
      <Row style={styles.rowStyle}>
        <Col
          className="black-text"
          style={styles.colStyle}
          s={6}
          l={6}
        >
          <img src="https://user-images.githubusercontent.com/38272211/99867457-77214c80-2b6e-11eb-8c5b-4ba73f7c4c8a.png" alt="Rogers-Development-Services-Logo"></img>
        </Col>
        <Col
          className="black-text"
          style={styles.colStyle}
          s={6}
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
            My last career in leadership development taught me that whatever investment I need to make sure it solves a human problem and contributes to growth for the people involved. I strive to apply my learners posture in every developing project I contribute to.You can access my current resume <a href="https://github.com/Rogers-Development-Services/Portfolio/files/5578900/Bootcamp.Resume.pdf" target="_blank">here</a>, I'm always open to learning about opportunties. Don't hesitate to reach out!
            </p>

          <div>
            <Icon right>
              <a target="blank" href="https://www.linkedin.com/in/matthewsrogers/"><i style={{ fontSize: "2rem" }} className="devicon-linkedin-plain"></i></a>
            </Icon>
            <Icon right>
              <a target="blank" href="mailto:matthew.shane.rogers@gmail.com"><i style={{ fontSize: "2rem" }}></i>email</a>
            </Icon>
            <Icon right>
              <a target="_blank" href="https://github.com/Rogers-Development-Services"><i style={{ fontSize: "2rem" }} className="devicon-github-plain"></i></a>
            </Icon>
          </div>

        </Col>
      </Row>
      <section>
        <h2>SKILLS</h2>
        <Row>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-html5-plain-wordmark colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-css3-plain-wordmark colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-javascript-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-jquery-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-nodejs-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-bootstrap-plain colored"></i>
          </Col>
        </Row>
        <Row>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-express-original colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-mysql-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-sequelize-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-mongodb-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
            s={2}
            l={2}>
            <i style={styles.iStyles} className="devicon-git-plain colored"></i>
          </Col>
          <Col className="skills-container"
            style={styles.colStyle}
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