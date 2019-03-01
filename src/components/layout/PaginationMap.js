import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from './../../actions/tasksActions';
import { setActivePage } from './../../actions/sortActions';
import { Link } from 'react-router-dom';

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
  let pagesArr = [];
  for (let i = 0; i < pages; i++) {
    pagesArr[i] = i + 1;
  }

  return (
    <nav aria-label="Page navigation example" className="mt-0">
      <ul className="pagination justify-content-end">
        <li
          className={`page-item ${
            activePage === pagesArr[0] ? 'disabled' : ''
          } `}
        >
          <Link
            to={`/page/${activePage - 1}`}
            className="page-link"
            onClick={goTo.bind(null, activePage - 1)}
          >
            Previous
          </Link>
        </li>
        {pagesArr.map(function(page) {
          return (
            <li
              className={`page-item ${page === activePage ? 'active' : ' '}`}
              key={page}
            >
              <Link
                to={`/page/${page}`}
                className="page-link"
                onClick={goTo.bind(null, page)}
              >
                {page}
              </Link>
            </li>
          );
        })}

        <li className={`page-item ${activePage === pages ? 'disabled' : ''} `}>
          <Link
            to={`/page/${activePage + 1}`}
            className="page-link disabled"
            onClick={goTo.bind(null, activePage + 1)}
          >
            Next
          </Link>
        </li>
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
