import React, { Component } from "react";

import Clock from "./components/Clock";
import Todo from "./components/Todo";
import Weather from "./components/Weather";
import Name from "./components/Name";
import Quotes from './components/Quotes';

import { connect } from "react-redux";

class App extends Component {
  state={image: ''}
componentDidMount() {
  var currentHour = new Date().getHours();
  if (1 <= currentHour && currentHour < 12) {
    this.setState({image: "https://source.unsplash.com/collection/539016/1600x900"})
  } else if (13 <= currentHour && currentHour < 18) {
    this.setState({image: 'https://source.unsplash.com/collection/3477914/1600x900'});
  } else this.setState({image: 'https://source.unsplash.com/collection/1658777/1600x900'});

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
    console.log(this.state.image)
    return (
      <div id="app">
        <img src={this.state.image} />
        <Weather />
        <div className="content">
          <div className="components">{this.renderPage()}</div>
          <Quotes />
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
