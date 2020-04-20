import {createStore, applyMiddleware, compose} from 'redux'
import {reducer} from './../redux/reducer';
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';

const composedEnhancers = compose(
    applyMiddleware(thunk, promiseMiddleware)
)

export const store = createStore(reducer, composedEnhancers);
