import React, { Component } from "react";
import { fetchWeather } from '../actions';
import { connect } from 'react-redux';

class Weather extends Component {
  render() {
      console.log(this.props.fetchWeather())
    return (
        <div className=''>   
            weather
        </div>
    )
  }
}

export default connect(null, {fetchWeather})(Weather);
