const url = "https://barclabs.vercel.app/puppies";

export const fetchPuppies = () => {
  return (dispatch) => {
    fetch(url)
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
    fetch("https://barclabs.vercel.app/updates")
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
