import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentTask } from '../../actions/tasksActions';
import history from './../../history';

const Task = ({ item, login, setCurrentTask }) => {
  const { id, username, email, text, status } = item;

  const editTask = () => {
    setCurrentTask(id);
    history.push(`/post/${id}`);
  };

  return (
    <li className="card mt-2">
      <div className="card-body text-body py-2">
        {/* user name and e-mail */}
        <div className="row mt-0">
          <div className="col-5">
            <div className="float-left">
              Username:
              <strong className="ml-2 text-primary">{username}</strong>
            </div>
          </div>
          <div className="col-7">
            <div className="float-right">
              E-mail:
              <strong className="ml-2 text-primary">{email}</strong>
            </div>
          </div>
        </div>
        {/* task text */}
        <div className="row mt-3">
          <div className="col">
            <strong className="card-title">
              <mark>{text}</mark>
            </strong>
          </div>
        </div>
        {/* status and edit btn */}
        <div className="row mt-2">
          <div className="col-6 mt-1">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked={status === 10}
              />
              <label className="custom-control-label" htmlFor="checkBoxInput">
                Status
              </label>
            </div>
          </div>
          <div className="col-6 mt-1">
            <button
              type="button"
              className="col-md-8 btn btn-secondary btn-sm float-right"
              disabled={!login}
              onClick={editTask}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

Task.propTypes = {
  setCurrentTask: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  login: state.login.doLogin
});

export default connect(
  mapStateToProps,
  { setCurrentTask }
)(Task);
