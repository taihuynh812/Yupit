import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { searchBusinesses } from "../../actions/search";


const mSTP = (state) => ({
    search: state.entities.search
})

const mDTP = (dispatch) => ({
    searchBusinesses: (search) => dispatch(searchBusinesses(search))
})

export default connect(mSTP, mDTP)(SearchBar)