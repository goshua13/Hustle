import React, { Component } from "react";
import { connect} from 'react-redux';
import {saveName} from '../actions';

class Name extends Component {
  state = { name: "" };

  onNameSubmit = e => {
    e.preventDefault();
    this.props.saveName(this.state.name);
    this.setState({
      name: ""
    });
  };
  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  showName() {
    return (
      <div className='input-field'>
        <form onSubmit={this.onNameSubmit}>
          <input
            className="form-control"
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Enter your name..."
          />
        </form>
      </div>
    );
  }

  render() {
    return <>{this.showName()}</>;
  }
}

export default connect(null, {saveName})(Name)
