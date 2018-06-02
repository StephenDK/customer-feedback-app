// Survey form review shows users their form inputs for review 
import React from 'react';
// ======================================
// REDUX FORM SETUP STEP 18:
// We have to get all of the form data from the redux store and
// then render it onto the page.
// first import and wire up the connect helper
import { connect } from 'react-redux';
// ======================================


const SurveyFormReview = ({ onCancel }) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
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
    return { formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps)(SurveyFormReview);