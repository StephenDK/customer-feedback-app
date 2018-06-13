import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    
    dispatch({ type: FETCH_USER, payload: res.data })
};  

// creat a new action creator to send the token received from stripe
// and send it to the server on the back end
export const handleToken = (token) => async dispatch => {
// make a post request to the back end server 
    const res = await axios.post('/api/stripe', token);

    // server sends back the update user model in the payload 
    dispatch({ type: FETCH_USER, payload: res.data });
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

// ===================================
// REDUX FORM SETUP STEP 21:
// this action creator is going to be responsible for sumbitting the 
// survey data.
// The values arguent will  be passed the form data values
// ===================================
// REDUX FORM SETUP STEP 23: cont..
// pass the history into the action creator 

export const submitSurvey = (values, history) => async dispatch => {
    // REDUX FORM SETUP STEP 23:
    const res = await axios.post('/api/surveys', values);

    // to redirect the user use the history.push function to naviagte the app
    history.push('/dashboard');
    dispatch({ type: FETCH_USER, payload: res.data })
    
};
// ===================================