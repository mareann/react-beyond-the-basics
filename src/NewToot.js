import React, { Component } from "react";
import NewTootInput from "./NewTootInput";

export default class NewToot extends Component {
  constructor(props) {
  	super(props); 
  	this.state = {
  		inputValue: ''
  	};
  }

  handleChange = event => {
     this.setState({
       inputValue: event.target.value
     });
  }

  render() {
  	console.log(this.state.inputValue);

    return (
      <div className="new-toot__form">
        <NewTootInput 
         changeWithMe={this.handleChange}
         tootInputState={this.state.inputValue}
        />
        <button className="new-toot__button">Toot</button>
      </div>
    );
  }
}

    //     <input 
    //       onChange={this.handleChange}
    //       type="text" className="new-toot__input" maxLength="40" 
    //       value={this.state.inputValue}
    //      />