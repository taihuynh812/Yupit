import { combineReducers } from "redux";
import businessesReducer from "./businesses";
import reviewReducer from "./reviews";
import usersReducer from "./users";

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessesReducer,
    reviews: reviewReducer
})

export default entitiesReducer
