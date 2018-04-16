// Import class component from react
import React, { Component } from 'react';
// import the connect helper from react-redux
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>
            default:
                return <li><a href="">Logout</a></li>
        }

    }
    
    
    render() {
        console.log(this.props);
        return (
            <nav>
                <div className='nav-wrapper'>
                    <a className='left brand-logo'>CustomerServer</a>
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