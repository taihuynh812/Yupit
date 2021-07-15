import BusinessIndex from "./business_index";
import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/business";
import { fetchUsers } from "../../actions/user";


const mSTP = (state) => {
    // debugger
    return {
        businesses: state.entities.businesses
    }
}


const mDTP = (dispatch) => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(BusinessIndex)