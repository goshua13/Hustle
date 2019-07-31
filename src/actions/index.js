import { FETCH_WEATHER, STORE_ITEM, NAME } from './types';
import axios from 'axios'

const API_KEY = '51261790ca4bc7aae8cc051f9d1c2b5c';
const ROOT_URL = `https://api.darksky.net/forecast/${API_KEY}`

export const fetchWeather = ({coords}) => async dispatch =>{
    const url = `${ROOT_URL}/${coords.latitude},${coords.longitude}`
    const request = await axios.get(url)
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


