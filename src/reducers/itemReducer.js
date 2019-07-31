import { STORE_ITEM, NAME, FETCH_WEATHER } from "../actions/types";

const initialState = {
  addItem: "",
  name: "",
  weather: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_ITEM:
      return { ...state, addItem: action.payload };
    case NAME:
      return { ...state, name: action.payload };
    case FETCH_WEATHER:
      return Object.assign({ ...state, weather: action.payload })
    default:
      return state;
  }
};
