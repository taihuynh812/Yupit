import { connect } from 'react-redux';
import BusinessShow from './business_show';

const mSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
})

const mDTP = (dispatch, ownProps) => ({

})

export default connect(mSTP, mDTP)(BusinessShow)