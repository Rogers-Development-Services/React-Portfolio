import React from "react";
import "../assets/styles/Contact.css";
import { Textarea, Icon, TextInput, Button } from 'react-materialize';


function Contact() {
  return (
    <div>

      <h2>Contact Us!</h2>
      <aside className="introduction">
        <p>We would <em>love</em> to hear from you! </p>
        <p>Please use the <strong><em>Contact Form</em></strong> to send us a message.</p>
      </aside>

      {/* START HERE */}
      {/* Style The Contact Form How Ever You Prefer */}
      <form className="gform pure-form pure-form-stacked" method="POST" data-email="matthew.shane.rogers@gmail.com"
        action="https://script.google.com/macros/s/AKfycbz0lCgoEhYNK-aUDuMl-cy1q2z1EdI4h4BDNwpd/exec">
        {/* change the form action to your script url */}

        <TextInput
          className="input"
          name="name"
          icon="person"
          id="client-name"
          label="Full Name"
          placeholder="Mr. Rogers"
        />

        <Textarea
          className="input"
          icon={<Icon>mode_edit</Icon>}
          name="message"
          id="client-message"
          label="Message"
          placeholder="Tell us what's on your mind..."
        />

        <TextInput
          className="input"
          email
          name="email"
          icon="email"
          id="client-email"
          label="Email"
          placeholder="your.name@email.com"
          validate
        />

        {/* <fieldset className="pure-group honeypot-field" style={{ display: "none" }}>
          <label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
          <input id="honeypot" type="text" name="honeypot" value="" />
        </fieldset> */}

        <Button
          // className="submit-button"
          style={{ margin: "1rem" }}
          node="button"
          type="submit"
          waves="light"
        >
          Submit<Icon right>send</Icon>
        </Button>

        {/* <button className="button-success pure-button button-xlarge">
            <i className="fa fa-paper-plane"></i>&nbsp;Send</button> */}

        {/* Customise the Thankyou Message People See when they submit the form: */}
        <div style={{display: "none"}}className="thankyou_message">
          <h2><em>Thanks</em> for contacting us! We will get back to you soon!</h2>
        </div>

      </form>

      {/* Submit the Form to Google Using "AJAX" */}
      <script data-cfasync="false" src="form-submission-handler.js"></script>



    </div>
  );
}

export default Contact;