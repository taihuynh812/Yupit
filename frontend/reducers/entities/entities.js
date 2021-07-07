import { combineReducers } from "redux";
import businessesReducer from "./businesses";
import usersReducer from "./users";

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessesReducer,
})

export default entitiesReducer
