import { connect } from "react-redux";
import { login, receiveErrors } from "../../actions/session";
import SessionForm from "./session_form";


const mSTP = (state, ownProps) => ({
    user: {
        username: "",
        password: ""
    },
    errors: state.errors.session,
    formType: 'login'
})

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
})

export default connect(mSTP, mDTP)(SessionForm)