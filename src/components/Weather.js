import React, { Component } from "react";
import { fetchWeather } from '../actions';
import { connect } from 'react-redux';

class Weather extends Component {
  render() {
    return (
        <div className='weather'>   
            weather
        </div>
    )
  }
}

export default connect(null, {fetchWeather})(Weather);
