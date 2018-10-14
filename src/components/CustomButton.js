import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

class CustomButton extends Component {

  render() {
    return (
      <Button bsStyle={this.props.class} bsSize={this.props.size} disabled={this.props.disabled} onClick={this.props.action} block>{this.props.text}</Button>
    );
  }
}

export default CustomButton;