import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from '../../actions/tasksActions';
import { setActivePage } from '../../actions/sortActions';
import PaginationBtn from './PaginationBtn';

const Pagination = ({
  setActivePage,
  getTasks,
  activePage,
  allTasks,
  sort
}) => {
  const goTo = page => {
    setActivePage(page);
    getTasks(sort, page);
  };

  // Number of pages
  const pages = Math.ceil(allTasks / 3);

  return (
    <nav aria-label="Page navigation example" className="mt-0">
      <ul className="pagination justify-content-end">
        <PaginationBtn
          classname={activePage === 1 ? 'disabled' : ''}
          page={1}
          onClick={goTo.bind(null, 1)}
          btnName="&laquo;"
        />
        <PaginationBtn
          classname={activePage === 1 ? 'disabled' : ''}
          page={activePage - 1}
          onClick={goTo.bind(null, activePage - 1)}
          btnName="Previous"
        />
        <PaginationBtn
          classname="active"
          page={activePage}
          onClick={goTo.bind(null, activePage)}
          btnName={activePage}
        />
        <PaginationBtn
          classname={activePage === pages ? 'disabled' : ''}
          page={activePage + 1}
          onClick={goTo.bind(null, activePage + 1)}
          btnName="Next"
        />
        <PaginationBtn
          classname={activePage === pages ? 'disabled' : ''}
          page={pages}
          onClick={goTo.bind(null, pages)}
          btnName="&raquo;"
        />
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  sort: PropTypes.string.isRequired,
  allTasks: PropTypes.number.isRequired,
  getTasks: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activePage: state.sort.activePage,
  sort: state.sort.sortBy,
  allTasks: state.tasks.allTasksNumber
});

export default connect(
  mapStateToProps,
  { getTasks, setActivePage }
)(Pagination);
