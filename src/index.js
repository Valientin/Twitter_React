import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import createSagaMiddleware from 'redux-saga';

import mySaga from './app/sagas'
import reducers from './app/reducers';

import Routes from './routes/index';
import './index.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(promiseMiddleware),
    applyMiddleware(sagaMiddleware)
)

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
    	    <Routes />
        </BrowserRouter>
    </Provider>
)

sagaMiddleware.run(mySaga);

ReactDOM.render(<App />, document.getElementById('root'));
