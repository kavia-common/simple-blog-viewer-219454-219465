import React, { useMemo, useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination';

// Mock data for now
const MOCK_POSTS = [
  {
    id: 1,
    title: 'Exploring the Ocean Professional Design',
    author: 'Ava Stone',
    publishedAt: '2024-11-10T10:00:00Z',
    excerpt: 'A walkthrough of the Ocean Professional theme—colors, spacing, and components.',
    tags: ['design', 'theme']
  },
  {
    id: 2,
    title: 'React Accessibility Essentials',
    author: 'Liam Chen',
    publishedAt: '2024-11-12T08:30:00Z',
    excerpt: 'Make your React apps accessible with ARIA, focus management, and semantics.',
    tags: ['react', 'accessibility']
  },
  {
    id: 3,
    title: 'Pagination UX Tips',
    author: 'Mia Patel',
    publishedAt: '2024-11-15T09:45:00Z',
    excerpt: 'Practical advice for building user-friendly pagination controls.',
    tags: ['ux', 'frontend']
  },
  {
    id: 4,
    title: 'Understanding CSS Shadows',
    author: 'Noah Williams',
    publishedAt: '2024-11-17T14:05:00Z',
    excerpt: 'Learn how to use layered shadows to add depth while keeping it subtle.',
    tags: ['css', 'design']
  },
  {
    id: 5,
    title: 'Routing with React Router v6',
    author: 'Sophia Garcia',
    publishedAt: '2024-11-20T12:20:00Z',
    excerpt: 'Set up clean routes and nested layouts with React Router v6.',
    tags: ['react', 'routing']
  },
  {
    id: 6,
    title: 'Chips and Tags in UI',
    author: 'Ethan Johnson',
    publishedAt: '2024-11-22T16:40:00Z',
    excerpt: 'Use chips to highlight categories, filters, and statuses in your UI.',
    tags: ['components', 'ui']
  }
];

const PAGE_SIZE = 4;

/**
 * PUBLIC_INTERFACE
 * HomePage
 * Displays list of posts in a responsive grid with pagination.
 */
export default function HomePage() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  // Read query param for search
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = (params.get('q') || '').toLowerCase();
    setQuery(q);
    setPage(1);
  }, [window.location.search]);

  const filtered = useMemo(() => {
    if (!query) return MOCK_POSTS;
    return MOCK_POSTS.filter((p) => {
      const hay = [p.title, p.author, p.excerpt, ...(p.tags || [])].join(' ').toLowerCase();
      return hay.includes(query);
    });
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="container">
      <section className="mb-6" aria-label="Header">
        <h1 className="h1">Latest Posts</h1>
        <p className="lead">Insights and notes from the Simple Blog team.</p>
      </section>

      <section className="grid" aria-label="Posts list">
        {paginated.map((post) => (
          <div key={post.id} className="grid-col-6">
            <PostCard post={post} />
          </div>
        ))}
      </section>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
