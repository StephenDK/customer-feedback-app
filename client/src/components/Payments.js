// import class component from react
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// import react-stripe-checkout
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {

    render() {
        return(
            <StripeCheckout
            name="CustomerServer"
            description="$5 for 5 email credits." 
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="waves-effect waves-light btn">
            Add Credits
            </button>
            </StripeCheckout>
        );
    }
}
export default connect(null, actions)(Payments);