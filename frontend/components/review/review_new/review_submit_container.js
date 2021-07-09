import { connect } from "react-redux";
import { createReview } from "../../../actions/review";
import ReviewSubmit from "./review_submit";

const mSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId]
})

const mDTP = (dispatch) => ({
    createReview: (businessId, review) => dispatch(createReview(businessId, review))
})

export default connect(mSTP, mDTP)(ReviewSubmit)