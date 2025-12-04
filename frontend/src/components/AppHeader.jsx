import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import Button from './Button';

/**
 * PUBLIC_INTERFACE
 * AppHeader
 * Top navigation bar with brand, search and actions.
 */
export default function AppHeader({ theme = 'light', onToggleTheme, backendUrl }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (q) => {
    // For now, search just navigates to home with a query param
    const params = new URLSearchParams(location.search);
    if (q) params.set('q', q);
    else params.delete('q');
    navigate({ pathname: '/', search: params.toString() });
  };

  return (
    <header className="appbar" role="banner">
      <div className="container appbar-inner">
        <Link to="/" className="brand" aria-label="Simple Blog Home">
          <span className="brand-badge" aria-hidden="true">
            <span className="brand-dot" />
          </span>
          <span className="brand-title">Simple Blog</span>
        </Link>
        <div style={{ flex: 1 }} />
        <SearchBar onSearch={handleSearch} placeholder="Search posts..." />
        <div className="header-actions">
          <Button
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            onClick={onToggleTheme}
            variant="secondary"
            size="small"
            title="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
        </div>
      </div>
    </header>
  );
}
