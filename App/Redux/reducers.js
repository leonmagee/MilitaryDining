import React from 'react'
import {combineReducers} from 'redux'

/**
 * Import Reducers
 */
import {currentPageReducer} from './currentPageReducer'
import {currentMenuReducer} from './currentMenuReducer'

/**
 * Combine Reducers
 */
export const reducer = combineReducers({
    currentPage: currentPageReducer,
    currentMenu: currentMenuReducer,
})
