import React from 'react';

import {
    SETTINGS_PAGE,
} from './actions';

/**
 * currentPageReducer
 * Returns the current page
 */
export const currentPageReducer = (state = 'home', action) => {
    switch (action.type) {
        case SETTINGS_PAGE:
            return 'settings';
            break;
        default:
            return 'home';
    }
}
