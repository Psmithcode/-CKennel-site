import { connect } from "react-redux";
// import Import from "../components/Import";
import Updates from "../Components/Updates";
// import UpdateDetails from "../Components/updateDetails";
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
