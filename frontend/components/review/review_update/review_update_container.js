import { connect } from "react-redux";
import { receiveReviewErrors, updateReview, fetchReviews } from "../../../actions/review";
import { fetchBusiness } from "../../../actions/business";
import { withRouter } from "react-router-dom";
import ReviewUpdate from "./review_update";

const mSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    review: state.entities.reviews[ownProps.match.params.reviewId],
    user_id: state.session.id,
    errors: state.errors.review
})

const mDTP = (dispatch) => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    updateReview: (businessId, review) => dispatch(updateReview(businessId, review)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    receiveReviewErrors: errs => dispatch(receiveReviewErrors(errs))
})

export default withRouter(connect(mSTP, mDTP)(ReviewUpdate))