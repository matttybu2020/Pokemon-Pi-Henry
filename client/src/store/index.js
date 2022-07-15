/*import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);*/

import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


