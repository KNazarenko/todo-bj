import { DO_LOG_IN, DO_LOG_OUT } from './type';

/**
 |--------------------------------------------------
 | Log in
 |--------------------------------------------------
 */

export function doLogIn() {
  return {
    type: DO_LOG_IN,
    payload: true
  };
}

export function doLogOut() {
  return {
    type: DO_LOG_OUT,
    payload: false
  };
}
