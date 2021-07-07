import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBusiness } from '../../../actions/business';
import BusinessShow from './business_show';

const mSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
})

const mDTP = (dispatch, ownProps) => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
})

export default withRouter(connect(mSTP, mDTP)(BusinessShow))