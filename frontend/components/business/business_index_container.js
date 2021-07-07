import BusinessIndex from "./business_index";
import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/business";



const mSTP = (state) => {
    return {
        businesses: Object.values(state.entities.businesses)
    }
}


const mDTP = (dispatch) => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default connect(mSTP, mDTP)(BusinessIndex)