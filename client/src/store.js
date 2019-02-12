import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {}; //the initial state of our application, i.e no items in the TODO list

const middleware = [thunk];

const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)); //TODO: Figure out what this compose function does

export default store; //the store is essentially a store for the application state, it will initialize it and set it so that some function is called once a dispatch action is 
                      //sent to make changes to the state in a predictable way