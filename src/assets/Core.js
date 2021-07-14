import "./css/Core.css";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import React from "react";
import Home from "./routers/Home.jsx";
import About from "./routers/About.jsx";
import Contact from "./routers/Contact.jsx";
const NavLinkStyle = { textDecoration: "none" };
const NavActiveStyle = { textDecoration: "underline" };
function Core() {
  return (
    <Router>
      <div>
        <nav className="Core-nav">
        <NavLink to="/home"><h3 className="Core-nav-header">DanningtonSystems</h3></NavLink>
          <br />
          <div className="Core-nav-item">
            <NavLink to="/home" style={NavLinkStyle} activeStyle={NavActiveStyle}><h3 className="Core-nav-text">Home</h3></NavLink>
          </div>
          <div className="Core-nav-item">
            <NavLink to="/about" style={NavLinkStyle} activeStyle={NavActiveStyle}><h3 className="Core-nav-text">About & FAQ</h3></NavLink>
          </div>
          <div className="Core-nav-item">
            <NavLink to="/contact" style={NavLinkStyle} activeStyle={NavActiveStyle}><h3 className="Core-nav-text">Contact</h3></NavLink>
          </div>
        </nav>
      </div>

      <div className="Core-content">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Router forceRefresh={true}>
            <Redirect to="/home" from="/" push={true} />
          </Router>
        </Switch>
      </div>

      <div className="Core-footer">
        <h2 className="Content-Body Content-Centre">
          {new Date().getFullYear()}, DanningtonSystems.
          Site designed by <a href="https://www.bean.codes" target="_blank" rel="noreferrer" style={{color: "#7289DA", textDecoration: "none"}}>Dannington</a>.
          <h2 className="Content-Body Content-Centre">DS ❤️ OSS</h2>
          <br />
        </h2>
      </div>
    </Router>
  );
};

export default Core;
