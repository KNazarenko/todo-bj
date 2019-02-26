import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  updateTask,
  clearCurrentTask,
  getTasks
} from '../../actions/tasksActions';
import history from './../../history';

class Edit extends Component {
  constructor(props) {
    super(props);
    let { status, text } = this.props.task;
    this.state = {
      status,
      text,
      error: {}
    };
    this.onChange = this.onChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  clearState() {
    this.setState({
      status: '',
      text: '',
      error: {}
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleInputChange(e) {
    this.setState({
      status: e.target.checked ? 10 : 0
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { text, status } = this.state;
    const { id } = this.props.task;
    const { sort, activePage } = this.props;

    if (text === '') {
      this.setState({ error: { text: 'Description is required' } });
      return;
    }

    const editTask = {
      id,
      text,
      status
    };

    this.props.updateTask(editTask);
    this.clearState();
    this.props.clearCurrentTask();
    history.push('/');
    getTasks(sort, activePage);
  }

  render() {
    const { text, status, error } = this.state;
    let statusFlag = status === 10;

    return (
      <div className="jumbotron py-2 border bg-white mt-3">
        <form className="mt-3" onSubmit={this.onSubmit}>
          <div className="col mt-1">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="taskDone"
                className="custom-control-input"
                checked={statusFlag}
                onChange={this.handleInputChange}
              />
              <label className="custom-control-label" htmlFor="taskDone">
                Task done
              </label>
            </div>
          </div>

          <div className="form-group mt-4">
            <label>Task description</label>
            <textarea
              className={`form-control ${error.text ? 'is-invalid' : ' '}`}
              name="text"
              rows="2"
              value={text}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">{error.text}</div>
          </div>

          <input
            type="submit"
            value="Add task"
            className="btn btn-secondary btn-block"
          />
        </form>
      </div>
    );
  }
}

Edit.propTypes = {
  task: PropTypes.object.isRequired,
  sort: PropTypes.string.isRequired,
  activePage: PropTypes.number.isRequired,
  updateTask: PropTypes.func.isRequired,
  clearCurrentTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  task: state.tasks.currentTask,
  sort: state.sort.sortBy,
  activePage: state.sort.activePage
});

export default connect(
  mapStateToProps,
  { updateTask, clearCurrentTask, getTasks }
)(Edit);
