import { connect } from "react-redux";
import { createReview } from "../../../actions/review";
import ReviewSubmit from "./review_submit";
import { fetchBusiness } from "../../../actions/business";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    user_id: state.session.id,
    errors: state.errors.review
})

const mDTP = (dispatch) => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    createReview: (businessId, review) => dispatch(createReview(businessId, review))
})

export default withRouter(connect(mSTP, mDTP)(ReviewSubmit))