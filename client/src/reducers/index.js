import { combineReducers } from 'redux';

// ==========================================
// REDUX FORM SETUP SET 1:
// Import the form reducer function from redux-form.
// Use as to rename the reducer function to reduxForm.
import { reducer as reduxForm } from 'redux-form';
// ==========================================

import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    // ========================================
    // REDUX FORM SETUP SET 2:
    // Add reduxForm reducer to combineReducers.
    // Use form key to refer to reduxForm reducer
    form: reduxForm
    // ========================================
});