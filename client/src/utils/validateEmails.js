// REDUX FORM SETUP STEP 16:
// Validate emails function
// ======================================
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default (emails) => {
    // Take the emails and set it to a new variable.
    const invalidEmails = emails
    // Take to emails string passed in an seperate at the commas.
    .split(',')
    // map over the new split emails array and for each email trim the whitspaces
    .map(email => email.trim())
    // filter the array of emails for emails that do not match the regex test
    .filter(email => re.test(email) === false)

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }

    return null;
};
// ======================================
