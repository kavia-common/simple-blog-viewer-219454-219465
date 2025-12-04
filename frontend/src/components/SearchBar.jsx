import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * PUBLIC_INTERFACE
 * SearchBar
 * Inline search input with submit callback.
 */
export default function SearchBar({ placeholder = 'Search...', onSearch }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    // read from URL if present
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    setValue(q);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    onSearch && onSearch(value.trim());
  };

  return (
    <form className="searchbar" onSubmit={submit} role="search" aria-label="Search posts">
      <span className="icon" aria-hidden="true">🔎</span>
      <input
        type="search"
        aria-label="Search posts"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn small" type="submit">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func
};
