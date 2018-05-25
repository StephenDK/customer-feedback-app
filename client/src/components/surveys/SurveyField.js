// SurveyField contains logic to render a single label
// and text input
// =================================
// REDUX FORM SETUP STEP 10:
// Create boiler plate function component.
// and import component into SurveyForm.
import React from 'react'

// =================================
// REDUX FORM SETUP STEP 13:
// Redux-form passses all its eventHandlers in props
// The input below is es6 for props.input
export default ({ input, label, meta: { error, touched } }) => {
    // console.log(props); Check this log for eventHandlers
    // console.log(meta); Check this log for error properties
  return (
    <div>
        <label>{label}</label>
        {/* to avoid passing specific name properties we can
         hold the object with all the keys and values in it
         hence ...input*/}
      <input {...input}/>
      {touched && error}
    </div>
  )
}
// =================================



// =================================