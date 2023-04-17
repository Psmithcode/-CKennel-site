import { connect } from "react-redux";
import { fetchPuppies } from "../redux/actions";
import UpdatePuppy from "../Components/updatePuppy";

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

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePuppy);
