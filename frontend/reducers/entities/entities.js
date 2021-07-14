import { combineReducers } from "redux";
import businessesReducer from "./businesses";
import reviewReducer from "./reviews";
import SearchReducer from "./search";
import usersReducer from "./users";

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessesReducer,
    reviews: reviewReducer,
    search: SearchReducer
})

export default entitiesReducer
