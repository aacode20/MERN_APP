//this is where we will actually be making our requests to the backend

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS //this return is going to our reducer, and so we need to add the type so the reducer knows what to do with this information
    };
};
//we are passing these to the reducer as the action, so we can use action.type to determine what kind of action it is, and also pass in any parameters from the front end like
//in this case the item id which is required for deletion
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id 
    };
};

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    };
}; 