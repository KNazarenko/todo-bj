import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks } from '../../actions/tasksActions';
import Task from './Task';
import Pagination from './../layout/Pagination';
import Sort from './../layout/Sort';

class Tasks extends Component {
  componentWillMount() {
    const { sort, activePage } = this.props;
    this.props.getTasks(sort, activePage);
  }

  render() {
    const { tasks } = this.props;

    return (
      <div className="row justify-content-center">
        <div className="col">
          <Pagination />
          <Sort />
          <ul className="jumbotron pt-0 pb-2 border my-2">
            {tasks.map(task => (
              <Task key={task.id} item={task} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  sort: PropTypes.string.isRequired,
  activePage: PropTypes.number.isRequired,
  getTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.sortBy,
  activePage: state.sort.activePage,
  tasks: state.tasks.items
});

export default connect(
  mapStateToProps,
  { getTasks }
)(Tasks);
