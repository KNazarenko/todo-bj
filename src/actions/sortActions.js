import { SET_ACTIVE_PAGE, SET_SORT } from './type';

/**
|--------------------------------------------------
| Set active page
|--------------------------------------------------
*/

export function setActivePage(page) {
  return {
    type: SET_ACTIVE_PAGE,
    payload: page
  };
}

/**
 |--------------------------------------------------
 | Sort
 |--------------------------------------------------
 */

export function setSortString(sort) {
  return {
    type: SET_SORT,
    payload: sort
  };
}
