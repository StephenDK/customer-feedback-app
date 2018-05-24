// SurveyForm shows a form for a user to add input
// ======================================
// REDUX FORM SETUP STEP 5:
// Setup the survey form component

import React, { Component } from 'react'
// ======================================
// REDUX FORM SETUP STEP 7:
// Import the reduxForm function from redux-form
// This function is similar to the redux connect function
import { reduxForm, Field } from 'redux-form';
// REDUX FORM SETUP STEP 8:
// Pull out the Field function from redux-form
// The Field function represents user input elements Ex. textarea, text field
// ======================================
// ======================================
// REDUX FORM SETUP STEP 11:
// Import SurveyField and create helper function to create more fileds
import SurveyField from './SurveyField';
// ======================================


class SurveyForm extends Component {
  // ======================================
  // REDUX FORM SETUP STEP 12:
  // The renderField function renders 4 different Fields
    renderFields() {
      return (
        <div>
          <Field type='text' name='title' component={SurveyField} />
        </div>
      );
    }
  // ======================================

  render() {
    return (
        <div>
          <form 
          onSubmit={this.props.handleSubmit(values => console.log(values))}>
            {this.renderFields()}
            <button type="submit">Submit</button>
          </form>
        </div>

      // ======================================
      // **NOTE** Below is a working example of redux-form 
      // without refactoring it to seperate components
      // <div>
      //   {/* REDUX FORM SETUP STEP 9:
      //   To get the values from the form wrap the Field in form tags.
      //   The handleSubmit function is given to us from the reduxForm helper
      //    */}
      //   <form
      //   onSubmit={this.props.handleSubmit(values => console.log(values))}
      //   >
      //     {/* REDUX FORM SETUP STEP 8 cont..:
      //     Field component in practise.
      //     The name property tells redux form that we have one piece
      //     of data called surveyTitle.
      //     Redux takes the value and stores it into the redux store automatically
      //     under a key of surveyTitle  */}
      //     <Field 
      //     type='text'
      //     name='surveyTitle'
      //     // The component property = <input type='text></input
      //     component='input'
      //     />
      //     <button type="submit">Submit</button>
      //   </form>
      // </div>
      // ======================================

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
