import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
        return state;
    }
}

// Setup authReducer to return either 3 values null, false, action.payload(user model)