import React from 'react';
import PropTypes from 'prop-types';

/**
 * PUBLIC_INTERFACE
 * Pagination
 * Renders page controls with aria-current and keyboard focus.
 */
export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" role="navigation" aria-label="Pagination">
      {pages.map((p) => (
        <button
          key={p}
          className="page-btn"
          aria-current={p === page ? 'page' : undefined}
          aria-label={`Go to page ${p}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}
    </nav>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
