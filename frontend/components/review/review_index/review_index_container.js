import { connect } from "react-redux";
import { fetchReviews } from "../../../actions/review";
import ReviewIndex from "./review_index";

const mSTP = (state, ownProps) => ({
    reviews: Object.values(state.entities.reviews),
})

const mDTP = (dispatch) => ({
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
})

export default connect(mSTP, mDTP)(ReviewIndex)