import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="navbar-item">
          React Graphql
        </span>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to='/'>Messages</Link>
          <Link className="navbar-item" to='/new'>New Message</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to='/sign-up' className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link to='login' className="button is-light">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
