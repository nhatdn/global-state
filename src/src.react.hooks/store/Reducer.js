import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./Action";

function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        };
        case REMOVE_TODO: {
            // find item and remove it
            return state;
        };
        case UPDATE_TODO: {
            // find item and update data for it
            return state;
        };
        default: {
            return state;
        };
    }
}

export default reducer;