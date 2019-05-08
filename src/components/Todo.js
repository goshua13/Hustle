import React, { Component } from "react";
import { todoItem } from "../actions";
import { connect } from "react-redux";

class Todo extends Component {
  state = { text: "" };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.todoItem(this.state.text);
    this.setState({
      text: ""
    });
  };

  taskInput() {
    return (
      <div className="input-field">
        <form onSubmit={this.onSubmit}>
          <h5 className="text-white">Enter in your main hustle for today</h5>
          <input
            className="form-control"
            type="text"
            value={this.state.text}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
  removeTodo() {
    localStorage.removeItem("todo");
    this.props.todoItem("");
  }
  todo() {
    var todo = this.props.addItem || localStorage.getItem('todo')
    return (
      <h4
        className="text-white text-center todo-item"
        onClick={() => this.removeTodo()}
      >
      <h5>Today</h5>
      <br/>
        {todo}
      </h4>
    );
  }

  renderContent() {
    var todo = localStorage.getItem("todo");
    if (todo) {
      return this.todo();
    } else {
      return this.taskInput();
    }
  }

  render() {
    return <div className="container">{this.renderContent()}</div>;
  }
}
const mapStateToProps = ({ item }) => {
  const { addItem } = item;
  return { addItem };
};
export default connect(
  mapStateToProps,
  { todoItem }
)(Todo);
