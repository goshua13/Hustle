import React, { Component } from "react";
import { fetchWeather } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios'

class Weather extends Component {
  
  getLocation = () => {
    if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.props.fetchWeather);
    } else {
      alert('browser not supported')
    }
  }
  render() {
    return (
        <div className='weather'>   
        <button onClick={this.getLocation}>
          WEATHER
        </button>
        </div>
    )
  }
}

export default connect(null, {fetchWeather})(Weather);
