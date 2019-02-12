//this is where we will actually be making our requests to the backend

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
};
//this return is going to our reducer, and so we need to add the type so the reducer knows what to do with this information