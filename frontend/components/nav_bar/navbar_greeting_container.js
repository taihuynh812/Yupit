import { connect } from "react-redux";
import { logout } from "../../actions/session";
import NavbarGreeting from "./navbar_greeting";

const mSTP = ({entities, session}) => ({
    currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavbarGreeting)