import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBusiness } from '../../../actions/business';
import { fetchReviews } from '../../../actions/review';
import { fetchUsers } from '../../../actions/user';
import BusinessShow from './business_show';

const mSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    users: state.entities.users
})

const mDTP = (dispatch, ownProps) => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default withRouter(connect(mSTP, mDTP)(BusinessShow))