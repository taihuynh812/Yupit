import { connect } from "react-redux";
import SearchResult from "./search_result";



const mSTP = (state) => ({
    businesses: Object.values(state.entities.search)
})

const mDTP = (dispatch) => ({
    searchBusinesses: (search) => dispatch(searchBusinesses(search))
})


export default connect(mSTP, mDTP)(SearchResult)