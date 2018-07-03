import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import { firebaseAuth } from './app/firebase';

import mySaga from './app/sagas'
import reducers from './app/reducers';

import Routes from './routes';
import './index.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(promiseMiddleware),
    applyMiddleware(sagaMiddleware)
)

const App = (props) => (
    <Provider store={store}>
        <BrowserRouter>
    	    <Routes {...props}/>
        </BrowserRouter>
    </Provider>
)

sagaMiddleware.run(mySaga);


firebaseAuth.onAuthStateChanged((user) => {
    ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})