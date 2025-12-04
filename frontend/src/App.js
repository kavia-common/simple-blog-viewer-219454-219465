import React, { useMemo, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './theme.css';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import AppHeader from './components/AppHeader';

/**
 * PUBLIC_INTERFACE
 * App
 * The application root that sets up theme, routing and top-level layout.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle handler exposed to header
  const toggleTheme = useMemo(
    () => () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    []
  );

  // Read backend URL for future wiring; unused for now
  const backendUrl = process.env.REACT_APP_BACKEND_URL || '';

  return (
    <BrowserRouter>
      <div className="app-root">
        <AppHeader
          theme={theme}
          onToggleTheme={toggleTheme}
          backendUrl={backendUrl}
        />
        <main id="main-content" className="app-main" tabIndex="-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostDetailPage />} />
          </Routes>
        </main>
        <footer className="app-footer" aria-label="Footer">
          <div className="container">
            <p className="footer-text">© {new Date().getFullYear()} Simple Blog · Ocean Professional Theme</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
