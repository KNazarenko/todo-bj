import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doLogOut } from '../../actions/loginActions';
import history from './../../history';
import logo from './../../assets/img/github-logo-invert.png';

const Header = ({ login, doLogOut }) => {
  const logIn = () => {
    if (login) {
      doLogOut();
    } else {
      history.push('/login');
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark text-light">
      <div className="container col-md-8 col-xl-6 justify-content-between">
        <a
          href="https://github.com/KNazarenko/KNazarenko.github.io"
          className="navbar-brand"
        >
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="KNazarenko.github.io"
          />
          <span className="appName">Todo</span>
        </a>

        <div>
          <ul className="nav justify-content-end text-warning">
            <li className="nav-item">
              <Link to="/" className="nav-link navLink text-warning">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/add" className="nav-link navLink text-warning">
                Add task
              </Link>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="btn btn-outline-warning btn-sm"
          onClick={logIn}
        >
          {login ? 'Log out' : 'Log in'}
        </button>
      </div>
    </nav>
  );
};

Header.propTypes = {
  login: PropTypes.bool.isRequired,
  doLogOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  login: state.login.doLogin
});

export default connect(
  mapStateToProps,
  { doLogOut }
)(Header);
