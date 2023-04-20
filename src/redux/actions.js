
export const fetchPuppies = () => {
  return (dispatch) => {
    fetch(process.env.REACT_APP_URL_PUPPIES)
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "FETCH_PUPPIES",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const deletePuppy = (index) => {
  return {
    type: "DELETE_PUPPY",
    value: index,
  };
};

export const fetchUpdates = () => {
  return (dispatch) => {
    fetch(process.env.REACT_APP_URL_UPDATES)
      .then((res) => res.json())
      .then((response) => {
        // console.log("************************************", response);
        const action = {
          type: "FETCH_UPDATES",
          value: response,
        };
        dispatch(action);
      });
  };
};
