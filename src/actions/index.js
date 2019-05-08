import { FETCH_WEATHER, STORE_ITEM, NAME } from './types';
import axios from 'axios'

const API_KEY = '98e5ea952ce5cc5f6c66bc84d5aa8dfa';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

export const fetchWeather = (city) => async dispatch =>{
    const url = `${ROOT_URL}&q={city},us`
    const request = await axios.get(url);

    return dispatch({ type: FETCH_WEATHER, payload: request})
}

export const todoItem = item => ( localStorage.setItem('todo', item), {
  type: STORE_ITEM,
  payload: item
})

export const saveName = (name) => (localStorage.setItem('name', name), {
  type: NAME,
  payload: name
});


