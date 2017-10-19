import React from 'react';

import {SETTINGS_PAGE, MESS_HALLS_PAGE, MESS_HALL_MENU} from './actions';

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
    case MESS_HALL_MENU:
      return 'menu_page';
      break;
    default:
      return 'home';
  }
}
