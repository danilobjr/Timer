import { CHANGE_ACTIVE_NAVIGATION_TAB_ITEM_ID } from './actions';

export const activeNavigationTabItemIdHistory = (state = [0,-1], action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_NAVIGATION_TAB_ITEM_ID:
            return [action.id, state[0]];
        default:
            return state;
    }
}