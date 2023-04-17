import { connect } from "react-redux";
import PuppyDetails from "../Components/puppyDetails.js";
import { fetchPuppies } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    puppies: state.puppies,
  };
};

const mapDispatchToProps = (dispatch, index) => {
  return {
    fetchPuppies: () => dispatch(fetchPuppies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PuppyDetails);
