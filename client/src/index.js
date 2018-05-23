// Import materialize-css
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
// import reducers
import reducers from './reducers';
// dev axios helpers
import axios from 'axios';
window.axios = axios;


// creates redux store 
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// wire up app with the provider tag from react-redux
ReactDOM.render(
<Provider store={store}><App /></Provider>,
 document.getElementById("root")
);
