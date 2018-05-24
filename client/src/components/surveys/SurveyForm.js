// SurveyForm shows a form for a user to add input
// ======================================
// REDUX FORM SETUP STEP 5:
// Setup the survey form component

import React, { Component } from 'react'
// ======================================
// REDUX FORM SETUP STEP 7:
// Import the reduxForm function from redux-form
// This function is similar to the redux connect function
import { reduxForm } from 'redux-form';
// ======================================


class SurveyForm extends Component {
  render() {
    return (
      <div>
        SurveyForm!
      </div>
    )
  }
}

// ======================================
// REDUX FORM SETUP STEP 7 cont..:
// Connect the component to the form store 
// reduxForm takes object options in its argument
export default reduxForm({
  // 
  form: 'surveyForm'
})(SurveyForm);
// ======================================


// ======================================
