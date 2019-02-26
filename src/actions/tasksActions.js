import {
  GET_TASKS,
  ADD_TASK,
  SET_CURRENT_TASK,
  CLEAR_CURRENT_TASK,
  UPDATE_TASK
} from './type';

import md5 from 'md5';
import axios from 'axios';

const url = 'https://uxcandy.com/~shapoval/test-task-backend';

/**
 |--------------------------------------------------
 | Get data
 |--------------------------------------------------
 */

export const getTasks = (sort, page) => async dispatch => {
  const res = await axios.get(
    url + `/?developer=KNazarenko&sort_field=${sort}&page=${page}`
  );
  dispatch({
    type: GET_TASKS,
    payload: res.data.message
  });
};

/**
|--------------------------------------------------
| Add data
|--------------------------------------------------
*/

export const addTask = item => async dispatch => {
  let { username, email, text } = item;

  let data = new FormData();
  data.append('username', username);
  data.append('email', email);
  data.append('text', text);

  const res = await axios.post(url + '/create?developer=KNazarenko', data);
  dispatch({
    type: ADD_TASK,
    payload: res.data
  });
};

/**
|--------------------------------------------------
| Edit data
|--------------------------------------------------
*/
export function setCurrentTask(id) {
  return {
    type: SET_CURRENT_TASK,
    payload: id
  };
}

export function clearCurrentTask() {
  return {
    type: CLEAR_CURRENT_TASK
  };
}

export const updateTask = editTask => async dispatch => {
  const { id, text, status } = editTask;

  let fields =
    'status=' + status + '&text=' + encodeURIComponent(text) + '&token=beejee';
  let md5_hash = md5(fields);

  let data = new FormData();
  data.append('status', status);
  data.append('text', text);
  data.append('token', 'beejee');
  data.append('signature', md5_hash);

  await axios.post(`${url}/edit/${id}?developer=KNazarenko`, data);

  dispatch({
    type: UPDATE_TASK,
    id,
    text,
    status
  });
};
