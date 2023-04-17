import { combineReducers } from "redux";

const puppies = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PUPPIES":
      return action.value;
    default:
      return state;
  }
};
const updates = (state = [], action) => {
  switch (action.type) {
    case "FETCH_UPDATES":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ puppies, updates });
