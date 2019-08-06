import React, { Component } from "react";
import { fetchWeather } from '../actions';
import { connect } from 'react-redux';

let icon = ''
let temp = 0;
let city = ''
class Weather extends Component {

componentDidMount() {
    if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.props.fetchWeather);
    } else {
      alert('browser not supported')
    }
}
componentWillUpdate(nextProps, nextState) {
  icon = nextProps.weather.weather[0].icon;
  temp = nextProps.weather.main.temp;
  temp = (temp - 273.15) * 9/5 + 32;
  city = nextProps.weather.name
}


  render() {
    return (
        <div className='weather row'>
          <img className='col-8' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} style={{width: 50, height: 50}}/>   
          <h4 className='col-4 text-white' style={{width: 10, height: 10}}>{Math.round(temp)}°</h4>
          <h2 className='col-12 text-white text-center'>{city}</h2>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  const {weather} = state.item
  return {weather}
}

export default connect(mapStateToProps, {fetchWeather})(Weather);
