url = "https://barclabs.vercel.app/puppies";

export const fetchPuppies = () => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "FETCH_PUPPIES",
          value: response.Results,
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
