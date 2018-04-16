import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
    return function(dispatch) {
        axios.get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }))
    }
    
};



/*  An action is a javascript object with a type property 
and a payload as well.

Action creaters always expects us to return an action. In turn the 
action gets sent to all of the reducers inside the app which produces new values 
for state and then updates the redux store. The redux store then send the new
state back to all of the components.
*/

/*The dispatch function sends the action to all the different reducers
in the store causing an instant recalculate app state
*/