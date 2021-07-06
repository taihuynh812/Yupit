import { connect } from "react-redux";
import { receiveErrors, signup } from "../../actions/session";
import SessionForm from "./session_form";


const mSTP = (state, ownProps) => ({
    user: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        zipcode: ""
    },
    errors: state.errors.session,
    formType: 'signup'
})

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
})

export default connect(mSTP, mDTP)(SessionForm)