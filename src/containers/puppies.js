// fill out this container

import { connect } from "react-redux";
import Import from "../components/Import";
import { fetchPuppies, deletePuppy } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    puppies: state.puppies,
  };
};

const mapDispatchToProps = (dispatch, index) => {
  return {
    fetchPuppies: () => dispatch(fetchPuppies()),
    deletePuppy: (index) => dispatch(deletePuppy(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);
