import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../actions/tasksActions';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      text: '',
      error: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  clearState() {
    this.setState({
      username: '',
      email: '',
      text: '',
      error: {}
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { username, email, text } = this.state;

    // Check For Empty string
    if (username === '') {
      this.setState({ error: { username: 'Username is required' } });
      return;
    }
    if (email === '') {
      this.setState({ error: { email: 'E-mail is required' } });
      return;
    }
    if (text === '') {
      this.setState({ error: { text: 'Description is required' } });
      return;
    }

    const newTask = {
      username,
      email,
      text
    };

    this.props.addTask(newTask);
    this.clearState();
    this.props.history.push('/');
  }

  render() {
    const { username, email, text, error } = this.state;

    return (
      <div className="jumbotron py-2 border bg-white mt-3">
        <form className="mt-3" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User name</label>
            <input
              type="text"
              name="username"
              className={`form-control ${error.username ? 'is-invalid' : ' '}`}
              value={username}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">{error.username}</div>
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input
              type="text"
              name="email"
              className={`form-control ${error.email ? 'is-invalid' : ' '}`}
              value={email}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">{error.email}</div>
          </div>

          <div className="form-group">
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

Add.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTask }
)(Add);
