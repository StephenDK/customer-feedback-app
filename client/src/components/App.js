import React from 'react';
// import react router dom
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    {/* This header component will display on every */}
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
};

export default App;