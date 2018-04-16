import React, { Component } from 'react';
// import react router dom
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {    
        return (
            <div>
                <BrowserRouter>
                    <div className='container'>
                        {/* This header component will display on every page*/}
                        <Header />
                        {/* Use the exact key word or exact={true} to keep components from 
                        displaying on the same page */}
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/dashboard/newsurvey/" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }    
};

export default connect(null, actions) (App);