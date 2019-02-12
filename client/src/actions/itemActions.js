//this is where we will actually be making our requests to the backend
import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
//dispatch allows us to use axios and then also return the object at the end to our reducer so that it can change the app state
export const getItems = () => dispatch => { //so now what getItems is doing is its first calling setItemsLoading which will set the loading state to true
    dispatch(setItemsLoading());            //and then its going to use axios(for making http requests) to make a call to the items endpoint of our backend
    axios                                   //which will then take that response from the endpoint and return a new action where the payload is the items we got from our backend
    .get('/api/items')
    .then(res => 
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    )
};
//we are passing these to the reducer as the action, so we can use action.type to determine what kind of action it is, and also pass in any parameters from the front end like
//in this case the item id which is required for deletion
export const deleteItem = (id) => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })  //TODO: Maybe upon success true from delete request to endpoint we show message 'Item deleted!'
        )
};

export const addItem = (item) => dispatch => {
    axios
        .post('/api/items', item)
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
}; 

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};