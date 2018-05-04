// Import class component from react
import React, { Component } from 'react';
// import the connect helper from react-redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import payments
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }

    }
    
    
    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link 
                    // If user is signed in return dashboard or
                    // if user is not signed in return homeroot route
                    // ternary operator
                    to={this.props.auth ? '/dashboard' : '/'} 
                    className='left brand-logo'>
                    CustomerServer
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
// calls the entire state object out of the redux store
function mapStateToProps({ auth }) {
    return { auth };
}

// export navbar
export default connect(mapStateToProps) (Header);