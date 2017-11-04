/**
*
**/
import React from 'react'

import {SET_DATA_VALUE} from './actions'

/**
 * restDataReducer
 * Returns data from rest endpoint
 * @todo how to handle no data getting returned???
 */
export const restDataReducer = (state = null, action) => {
  console.log('paloadzz', action.payload, state)
  switch (action.type) {
    case SET_DATA_VALUE:
      return action.payload;
      break;
    default:
      return state;
  }
}
