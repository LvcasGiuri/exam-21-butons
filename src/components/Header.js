import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import '../App.css';

class Header extends Component {

  render() {
    return (
      <header className="app-header">
        <Image src={this.props.logo} className={this.props.class} alt="logo" />
        <h2>{this.props.title} </h2>
      </header>
    );
  }
}

export default Header