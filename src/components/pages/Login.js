import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doLogIn } from '../../actions/loginActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      error: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  clearState() {
    this.setState({
      username: '',
      email: '',
      error: {}
    });
  }

  // Add inputs value to local state
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { username, email } = this.state;
    const { loginName, loginPassword } = this.props.login;

    if (username !== loginName) {
      this.setState({ error: { username: 'Username is not correct' } });
      return;
    }
    if (email !== loginPassword) {
      this.setState({ error: { email: 'Password is not correct' } });
      return;
    }

    this.props.doLogIn();
    this.clearState();
    this.props.history.push('/');
  }

  render() {
    const { username, email, error } = this.state;

    return (
      <div className="jumbotron py-2 border bg-white mt-3">
        <form className="mt-3" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User name (admin)</label>
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
            <label>Password (123)</label>
            <input
              type="text"
              name="email"
              className={`form-control ${error.email ? 'is-invalid' : ' '}`}
              value={email}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">{error.email}</div>
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn-secondary btn-block"
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  doLogIn: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  login: state.login.loginData
});

export default connect(
  mapStateToProps,
  { doLogIn }
)(Login);
