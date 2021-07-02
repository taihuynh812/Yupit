import {combineReducers} from 'redux';
import sessionReducer from './session/session';
import entitiesReducer from './entities/entities';
import errorsReducer from './errors/errors' 

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
})

export default rootReducer