import React, { Component } from "react";

import Clock from "./components/Clock";
import Todo from "./components/Todo";
import Weather from "./components/Weather";
import Name from "./components/Name";

import { connect } from "react-redux";

class App extends Component {
  bgImage() {
    var currentHour = new Date().getHours();
    let image;
    if (1 <= currentHour && currentHour < 12) {
      image = "https://source.unsplash.com/collection/539016/1600x900";
    } else if (13 <= currentHour && currentHour < 18) {
      image = "https://source.unsplash.com/collection/539016/1600x900";
    }
    image = "https://source.unsplash.com/collection/1658777/1600x900";
    return image;
  }

  renderPage() {
    let nameEntered = localStorage.getItem("name");
    if (nameEntered) {
      return (
        <>
          <Clock name={nameEntered} />
          <Todo />
        </>
      );
    } else return <Name />;
  }

  render() {
    console.log(this.props.name);
    return (
      <div id="app">
        <Weather />
        <div className="content">
          <img src={this.bgImage()} />
          <div className="components">{this.renderPage()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ item }) => {
  const { name, addItem } = item;
  return { name, addItem };
};
export default connect(
  mapStateToProps,
  null
)(App);
