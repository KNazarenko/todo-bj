import React from 'react';
import PropTypes from 'prop-types';
import history from './../../history';
import { connect } from 'react-redux';
import { setSortString, setActivePage } from '../../actions/sortActions';
import { getTasks } from '../../actions/tasksActions';

const Sort = ({ setSortString, sortByDefault, getTasks, setActivePage }) => {
  const doSort = item => {
    setSortString(item);
    setActivePage(1);
    getTasks(item, 1);
    history.push('/page/1');
  };

  const sort = ['id', 'username', 'email', 'status'];

  return (
    <div
      className="d-flex bg-secondary text-white p-2 px-5"
      style={{ borderRadius: '3px' }}
    >
      <strong className="flex-grow-1">Sort by</strong>
      <span className="text-right">
        {sort.map(function(item, index) {
          return (
            <div className="form-check form-check-inline" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="radioBtn"
                id={`inlineRadio${index}`}
                value={index}
                defaultChecked={sortByDefault === item}
                onChange={doSort.bind(null, item)}
              />
              <label
                className="form-check-label"
                htmlFor={`inlineRadio${index}`}
              >
                {item}
              </label>
            </div>
          );
        })}
      </span>
    </div>
  );
};

Sort.propTypes = {
  setSortString: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  sortByDefault: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sortByDefault: state.sort.sortBy
});

export default connect(
  mapStateToProps,
  { setSortString, getTasks, setActivePage }
)(Sort);
