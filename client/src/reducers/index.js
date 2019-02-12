import { combineReducers } from 'redux'; //to combine all our reducers, for this one it's only item reducer but if we added authenticator then we would be able to combine them
                                         //it's a place for them to meet essentially

import itemReducer from './itemReducer';

export default combineReducers({
    item: itemReducer //this is where we would add other reducers
});