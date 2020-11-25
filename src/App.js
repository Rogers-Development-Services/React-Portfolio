import React from 'react';
import './App.css';
import "materialize-css";
import "devicon"
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, NavItem, Icon, Footer } from 'react-materialize';

const styles = {
  footerStyle: {
    backgroundColor: "#38b09a"
  }
};

function App() {
  return (
    <div>
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#">Rogers Development Services</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavItem href="/">
          About Us
  </NavItem>
        <NavItem href="/Portfolio">
          Portfolio
          {/* This is where custom styling and extra tabs would be added to appear within the sidenav */}
        </NavItem>
        <NavItem href="/Contact">
          Contact
  </NavItem>
      </Navbar>

      {/* What is the difference between exact path and switch/Router and just Router? */}
      <Router>
        <Switch>
          <Route exact path="/" component={AboutUs} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>

      <Footer
        style={styles.footerStyle}
        copyrights="© 2020 Rogers Development Services"
      >
      </Footer>

    </div>
  );
}

export default App;
