import React from 'react'

import {MESS_HALL_MENU} from './actions'

/**
 * Sets the current menu
 */
export const currentMenuReducer = (state = null, action) => {
  console.log('reducerz', action)
  switch (action.type) {
    case MESS_HALL_MENU:
      return action.payload;
      break;
    default:
      return null;
  }
}
