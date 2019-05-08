import { STORE_ITEM, NAME } from "../actions/types";

const initialState = {
  addItem: "",
  name: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_ITEM:
      return { ...state, addItem: action.payload };
    case NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
