import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combineReducer from './reducers/combineReducer'
import  middleware from './middleware/applymiddleWare'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'


const store= createStore(combineReducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
