import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review";
import { fetchUsers } from "../../actions/user";
import ReviewIndex from "./review_index";

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    reviews: Object.values(state.entities.reviews),
})

const mDTP = (dispatch) => ({
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
})

export default connect(mSTP, mDTP)(ReviewIndex)