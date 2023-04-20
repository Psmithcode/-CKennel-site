import { connect } from "react-redux";
import Updates from "../Components/Updates";
import { fetchUpdates } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    updates: state.updates,
  };
};

const mapDispatchToProps = (dispatch, index) => {
  return {
    fetchUpdates: () => dispatch(fetchUpdates()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Updates);
