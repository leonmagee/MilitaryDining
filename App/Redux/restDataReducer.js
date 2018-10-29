import React from 'react'

import {SET_DATA_VALUE} from './actions'

/**
 * restDataReducer
 * Returns data from rest endpoint
 */
export const restDataReducer = (state = null, action) => {
	// console.log('here\'s all the data')
	// console.log(action.payload)
  switch (action.type) {
    case SET_DATA_VALUE:
      return action.payload;
      break;
    default:
      return state;
  }
}
