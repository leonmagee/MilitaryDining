import React from 'react';

import {SETTINGS_PAGE, MESS_HALLS_PAGE} from './actions';

/**
 * currentPageReducer
 * Returns the current page
 */
export const currentPageReducer = (state = 'home', action) => {
  switch (action.type) {
    case SETTINGS_PAGE:
      return 'settings';
      break;
    case MESS_HALLS_PAGE:
      return 'mess_halls';
      break;
    default:
      return 'home';
  }
}
