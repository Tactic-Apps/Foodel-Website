import React from "react";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = (props) => {
  return (
    <header>
      <Navigation stickyNav={props.stickyNav} />
      <div className="hero-text-box">
        <h1>
          Eating healthy,
          <br />
          has never been so easy
        </h1>
        <a className="btn btn-full" href="#pricing">
          Sign up
        </a>
        <a className="btn btn-ghost" href="#features">
          Show me more
        </a>
      </div>
    </header>
  );
};

export default Header;
