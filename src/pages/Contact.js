import React from "react";
import "../assets/styles/Contact.css";
import { Textarea, Icon, TextInput, Button, Row, Col } from 'react-materialize';


function Contact() {
  return (
    <div className="container ">
      <h2>Contact Us!</h2>
      <Row>
        <Col
          style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
          s={12} l={12}>
          <p>We would <em>love</em> to hear from you! </p>
          <p>Please use the <strong><em>Contact Form</em></strong> to send us a message.</p>
        </Col>
      </Row>

      {/* START HERE */}
      {/* Style The Contact Form How Ever You Prefer */}
      <Row>
        <Col s={12} l={12}>
          <form
            className="gform pure-form pure-form-stacked"
            method="POST"
            data-email="matthew.shane.rogers@gmail.com"
            action="https://script.google.com/macros/s/AKfycbz0lCgoEhYNK-aUDuMl-cy1q2z1EdI4h4BDNwpd/exec"
          >
            {/* change the form action to your script url */}

            <Row>
              <Col s={6} l={6}>
                <TextInput
                  className="input"
                  name="name"
                  icon="person"
                  id="client-name"
                  label="First Name"
                  placeholder="Matthew"
                  s={12} l={12}
                />
              </Col>
              <Col s={6} l={6}>
                <TextInput
                  className="input"
                  name="name"
                  id="client-name"
                  label="Last Name"
                  placeholder="Rogers"
                  s={12} l={12}
                />
              </Col>
            </Row>

            <Row>
              <Col s={12} l={12}>
                <Textarea
                  className="input"
                  icon={<Icon>mode_edit</Icon>}
                  name="message"
                  id="client-message"
                  label="Message"
                  placeholder="Tell us what's on your mind..."
                  s={12} l={12}
                />
              </Col>
            </Row>

            <Row>
              <Col s={12} l={12}>
                <TextInput
                  className="input"
                  email
                  name="email"
                  icon="email"
                  id="client-email"
                  label="Email"
                  placeholder="your.name@email.com"
                  validate
                  s={12} l={12}
                />
              </Col>
            </Row>
            <Row>
              <Col style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
                s={12} l={12}>
                <Button
                  // className="submit-button"
                  style={{ margin: "1rem" }}
                  node="button"
                  type="submit"
                  waves="light"
                >
                  Submit<Icon right>send</Icon>
                </Button>
              </Col>
            </Row>


            {/* <fieldset className="pure-group honeypot-field" style={{ display: "none" }}>
          <label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
          <input id="honeypot" type="text" name="honeypot" value="" />
        </fieldset> */}

            {/* Customise the Thankyou Message People See when they submit the form: */}
            <div style={{ display: "none" }} className="thankyou_message">
              <h2><em>Thanks</em> for contacting us! We will get back to you soon!</h2>
            </div>

          </form>
        </Col>
      </Row>
      {/* Submit the Form to Google Using "AJAX" */}
      <script data-cfasync="false" src="form-submission-handler.js"></script>
    </div>
  );
}

export default Contact;