import "./styles.css";

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkbox: " ",
      radiobutton: " ",
      color: "#ff0000"
    };
  }

  handleCheckBoxChange = (event) => {
    this.setState({
      checkbox: event.target.value
    });
  };

  handleRadioButtonChange = (event) => {
    this.setState({
      radiobutton: event.target.value
    });
  };

  handleColorChange = (event) => {
    this.setState({
      color: event.target.value
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.checkbox} ${this.state.radiobutton} ${this.state.color}`
    );
    event.preventDefault();
  };

  render() {
    const { checkbox, radiobutton, color } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>CheckBox</label>
          <input
            type="checkbox"
            value={checkbox}
            onChange={this.handleCheckboxChange}
          />
        </div>
        <div>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value={radiobutton}
            onChange={this.handleRadiobuttonChange}
          />
          <br />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value={radiobutton}
            onChange={this.handleRadiobuttonChange}
          />
        </div>
        <div>
          <label>Color</label>
          <input
            type="color"
            value="#ff0000"
            onChange={this.handleColorChange}
          />
          <br />
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
