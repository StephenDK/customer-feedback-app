// SurveyForm shows a form for a user to add input
// ======================================
import { Link } from 'react-router-dom';
// REDUX FORM SETUP STEP 5:
// Setup the survey form component
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';
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

// REDUX FORM SETUP STEP 14:
// Create an array of objects with all the properties that
// are different in the renderFields function
// Also import and setup lodash
const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" },
];

class SurveyForm extends Component {
  // ======================================
  // REDUX FORM SETUP STEP 12:
  // The renderField function renders 4 different Fields
    renderFields() {
      return _.map(FIELDS, ({ label, name }) => {
        return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      })
    }
  // ======================================

  render() { 
    return (
        <div>
          <form 
          onSubmit={this.props.handleSubmit(values => console.log(values))}>
            {this.renderFields()}
            <Link to='/dashboard' className='red btn-flat white-text'>
            Cancel
            </Link>
            <button 
              type="submit"
              className='teal btn-flat right white-text'>
              Next
              <i className='material-icons right'>done</i>
            </button>
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
// REDUX FORM SETUP STEP 15:
// The validate function has a signle argument of values
// Values is an object with all of the values coming off the form
function validate(values) {
  // If redux-form returns an empty error object everything is good to go
  // else if the errors object contain values it will stop the process 
  const errors = {};

  errors.emails = validateEmails(values.emails || '');
  
  // look at the values object and if the user
  // did not give a title
  // if (!values.title) {
  //   // add the title value to the error object and assign a string value
  //   errors.title = "You must provide a title";
  // }
  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}
// ======================================



// ======================================
// REDUX FORM SETUP STEP 7 cont..:
// Connect the component to the form store 
// reduxForm takes object options in its argument
export default reduxForm({
  // Adding the validate option tells redux form
  // to run a validate function on the form.
  validate: validate,
  form: 'surveyForm'
})(SurveyForm);
// ======================================


// ======================================
