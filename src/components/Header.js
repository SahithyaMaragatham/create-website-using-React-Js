import React, { Component } from 'react';
import './style.css';
import logo from './logo1.png'; // Ensure this is the correct path to your logo

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="The Hindu Logo" className="logo" />
        </div>
        <nav className="nav-menu">
          <a href="#india">sports</a>
          <a href="#world">Education</a>
          <a href="#movies">Movies</a>
          <a href="#technology">Technology</a>
          <a href="#epaper">economics</a>
        </nav>
        <div className="actions">
          <button className="btn">FREE TRIAL</button>
          <button className="btn subscribe">SUBSCRIBE</button>
          <button className="btn login">LOGIN</button>
        </div>
      </header>
    );
  }
}

export default Header;