import React from "react";
import "../assets/styles/Portfolio.css";
import { Row, Col, Card, Icon, CardTitle, Button } from 'react-materialize';

const styles = {
  aStyle: {
    color: "white"
  },
  pStyle: {
    padding: "1rem"
  }
};

function Portfolio() {
  return (
    <div className="container">
      <h2>Portfolio</h2>
      <Row>
        <Col
          m={6}
          s={12}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://user-images.githubusercontent.com/38272211/96189272-08106280-0ef5-11eb-924b-ef5f3b265f28.JPG" alt="Cobra Arcade" reveal waves="light" />}
            reveal={
              <p >​Welcome to Cobra Arcade! Our hope is that you’ll be able to take advantage of this website to take a break from your busy lives and rest your brain while having some fun! Our team is so excited for you to enjoy a nostalgic trip down game history to play classic titles such as Snake, Flappy Bird, and Pong. See if you can make the top score chart!​This Heroku DB application will allow the user to record their highscores of our three offered games with Sequelize, Node.JS, Express, Express Handlebars, and Express Sessions and canvas.
                <Button
                  node="button"
                  waves="light"
                  style={{ margin: "1rem" }}
                >
                  <a style={styles.aStyle} waves="light" target="_blank" href="https://cobra-arcade.herokuapp.com/">Deployed Application</a>
                </Button>
              </p>}
            revealIcon={<Icon>more_horiz</Icon>}
            title="Cobra Arcade"
          >
            <p>
              <a target="_blank" href="https://github.com/Rogers-Development-Services/project-2.github.io">
                Git Hub Repo
        </a>
            </p>
          </Card>
        </Col>
        <Col
          m={6}
          s={12}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://raw.githubusercontent.com/aaronkplatt/localCoffeeShops.github.io/master/Assets/Images/Deployed%20Application.JPG" alt="Local Coffee Shop Locator" reveal waves="light" />}
            reveal={
              <p>​This application will generate the locations of nearby coffee shops, relative to a city search, and the current weather conditions for the city.
                <Button
                  node="button"
                  waves="light"
                  style={{ margin: "1rem" }}
                >
                  <a style={styles.aStyle} waves="light" target="_blank" href="https://aaronkplatt.github.io/localCoffeeShops.github.io/">Deployed Application</a>
                </Button>
              </p>}
            revealIcon={<Icon>more_horiz</Icon>}
            title="Local Coffee Shop Locator"
          >
            <p>
              <a target="_blank" href="https://github.com/Rogers-Development-Services/localCoffeeShops.github.io">
                Git Hub Repo
        </a>
            </p>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col
          m={6}
          s={12}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://raw.githubusercontent.com/Rogers-Development-Services/Work-Day-Scheduler/master/Assets/Images/Deployed%20Application.png" alt="Work Day Scheduler" reveal waves="light" />}
            reveal={
              <p>​This application will generate working scheduler which will store events for each hour of your workday effectively during any busy day.
                <Button
                  node="button"
                  waves="light"
                  style={{ margin: "1rem" }}
                >
                  <a style={styles.aStyle} waves="light" target="_blank" href="https://rogers-development-services.github.io/Work-Day-Scheduler/">Deployed Application</a>
                </Button>
              </p>}
            revealIcon={<Icon>more_horiz</Icon>}
            title="Work Day Scheduler"
          >
            <p>
              <a target="_blank" href="https://github.com/Rogers-Development-Services/Work-Day-Scheduler">
                Git Hub Repo
        </a>
            </p>
          </Card>
        </Col>
        <Col
          m={6}
          s={12}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://raw.githubusercontent.com/Rogers-Development-Services/Weather-Dashboard/master/Assets/Images/Deployed%20Application.JPG" alt="Weather Dashboard" reveal waves="light" />}
            reveal={
              <p>This application will generate the current weather conditions for a city and the succeeding five day forecast.
                <Button
                  node="button"
                  waves="light"
                  style={{ margin: "1rem" }}
                >
                  <a style={styles.aStyle} waves="light" target="_blank" href="https://rogers-development-services.github.io/Weather-Dashboard/">Deployed Application</a>
                </Button>
              </p>}
            revealIcon={<Icon>more_horiz</Icon>}
            title="Weather Dashboard"
          >
            <p>
              <a target="_blank" href="https://github.com/Rogers-Development-Services/Weather-Dashboard">
                Git Hub Repo
        </a>
            </p>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col
          m={6}
          s={12}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://user-images.githubusercontent.com/38272211/100006964-297c2e00-2d80-11eb-9ff8-eefd3e592ce6.JPG" alt="Word-Press-Example" reveal waves="light" />}
            reveal={
              <p>​This page will serve as a single page application for 4CBuisness. Specifically, it serves to communicate values, when events are coming up, and the ability to connect with the business.
                <Button
                  node="button"
                  waves="light"
                  style={{ margin: "1rem" }}
                >
                  <a style={styles.aStyle} waves="light" target="_blank" href="https://4cbusiness.com/">Deployed Application</a>
                </Button>
              </p>}
            revealIcon={<Icon>more_horiz</Icon>}
            title="4C Buisness"
          >
          </Card>
        </Col>
        <Col
          m={6}
          s={12}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://www.thespruceeats.com/thmb/LDrkRByRnQInfZF25HyLYSJ0Iyg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg" alt="Express-MYSQL-Application" reveal waves="light" />}
            reveal={
              <p>This Heroku DB application wil create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). (It is designed via the MVC design pattern
                <Button
                  node="button"
                  waves="light"
                  style={{ margin: "1rem" }}
                >
                  <a style={styles.aStyle} waves="light" target="_blank" href="https://nameless-mountain-99722.herokuapp.com/">Deployed Application</a>
                </Button>
              </p>}
            revealIcon={<Icon>more_horiz</Icon>}
            title="Express/MYSQL Application"
          >
            <p>
              <a target="_blank" href="https://github.com/Rogers-Development-Services/Eat-Da-Burger">
                Git Hub Repo
        </a>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;