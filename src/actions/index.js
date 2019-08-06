import { FETCH_WEATHER, STORE_ITEM, NAME } from './types';
import axios from 'axios'

const API_KEY = '54670d34f8d9089536b383f9a5a7769d';
const ROOT_URL = `api.openweathermap.org/data/2.5/weather?`

export const fetchWeather = ({coords}) => async dispatch =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&APPID=54670d34f8d9089536b383f9a5a7769d`
    const request = await axios.get(url)
    return dispatch({ type: FETCH_WEATHER, payload: request.data})
}

export const todoItem = item => (localStorage.setItem('todo', item), {
  type: STORE_ITEM,
  payload: item
})

export const saveName = (name) => (localStorage.setItem('name', name), {
  type: NAME,
  payload: name
});


