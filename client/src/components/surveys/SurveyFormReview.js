// Survey form review shows users their form inputs for review 
import React from 'react';
// ======================================
// REDUX FORM SETUP STEP 18:
// We have to get all of the form data from the redux store and
// then render it onto the page.
// first import and wire up the connect helper
import { connect } from 'react-redux';
// ======================================

// ======================================
// REDUX FORM SETUP STEP 19:
// To create the form review fields first import the formFileds.js file
// also import lodash to use the map function
import _ from 'lodash';
import formFields from './formFields';


const SurveyFormReview = ({ onCancel, formValues }) => {

    // map over the field array and for every field run the field array
const reviewFields = _.map(formFields, field => {
    return (
        <div key={field.name}>
            <label>{field.label}</label>
            <div>
                {formValues[field.name]}
            </div>
        </div>
    );
});

// ======================================

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            {/* To create the form review we can copy the code below 
            4x or we can map over the fields array like above  */}
            {/* <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
            </div> */}
            <button
            className='yellow darken-3 btn-flat' onClick={onCancel}>
            Back
            </button>
        </div>

    )
};
// After connect component to the redux store 
// use mapStateToProps function to get data
function mapStateToProps(state) {
    // you can check how the form data is stored by clearing the 
    // comment on the console.log
    // console.log(state);
    // formValues contains all of the form values
    return { formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps)(SurveyFormReview);