//this is where our actual state is going to go, it is where we check our actions like getItems, addItems which will dispatch to our reducer and can do so with a payload like
//id for example to delete an item on our list
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../actions/types';

const initialState = {
    items:[],
        //item is id and name because date is added automatically, whereas id needs to be generated upon creation which also involves getting a name for the item
    loading: false
}
//we are exporting a function with two parameters, state which is defaulted to the initialState and action which is the action type. The caller will pass in a state and action
// which we will then read and then react accordingly. i.e if it is a get_items we simply return the current state because the only thing in our state is the items.
// if it was an add_items, perhaps the state passed in would contain a new item and the function would add to the whole application state using the spread operator
export default function(state=initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading:false //we called setItemsLoading right before we made the get request so we wanna set it to false again
            }; //each time we return we are returning the previous state, but with updates like here there are none, but in delete_item we filter state.items to filter out an item such that it doesn't exist anymore
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload )
            }
        case ADD_ITEM:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: return state;    
    }
}