import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PaginationBtn = ({ classname, page, onClick, btnName }) => {
  return (
    <li className={`page-item ${classname} `}>
      <Link to={`/page/${page}`} className="page-link" onClick={onClick}>
        {btnName}
      </Link>
    </li>
  );
};

PaginationBtn.propTypes = {
  page: PropTypes.number.isRequired
};

PaginationBtn.defaultProps = {
  classname: null
};

export default PaginationBtn;
