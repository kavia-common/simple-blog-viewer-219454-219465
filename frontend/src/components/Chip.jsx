import React from 'react';
import PropTypes from 'prop-types';

/**
 * PUBLIC_INTERFACE
 * Chip
 * Tag label for categories.
 */
export default function Chip({ label }) {
  return <span className="chip" role="note" aria-label={`tag ${label}`}>#{label}</span>;
}

Chip.propTypes = {
  label: PropTypes.string.isRequired
};
