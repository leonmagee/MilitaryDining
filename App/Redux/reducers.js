import React from 'react';
import {combineReducers} from 'redux';

/**
 * Import Reducers
 */
import {currentPageReducer} from './currentPageReducer';

/**
 * Combine Reducers
 */
export const reducer = combineReducers({
    currentPage: currentPageReducer,
});
