import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reducers
import reducers from './reducers';

import App from './components/App';
// redux store 
const store = createStore(reducers, {}, applyMiddleware());

// wire up app with the provider tag from react-redux
ReactDOM.render(
<Provider store={store}><App /></Provider>,
 document.getElementById("root")
);