import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Chip from '../components/Chip';
import Button from '../components/Button';

// Mock data (same as HomePage); in real app fetch from backend
const MOCK_MAP = new Map([
  ['1', {
    id: 1,
    title: 'Exploring the Ocean Professional Design',
    author: 'Ava Stone',
    publishedAt: '2024-11-10T10:00:00Z',
    content: `This article explores the Ocean Professional theme, a modern look using blue and amber as accents.
It embraces minimalism, soft shadows, and rounded corners for a calm, professional look.`
    , tags: ['design', 'theme']
  }],
  ['2', {
    id: 2,
    title: 'React Accessibility Essentials',
    author: 'Liam Chen',
    publishedAt: '2024-11-12T08:30:00Z',
    content: `Accessibility should be a first-class citizen. Learn ARIA labels, focus management, and semantic HTML.`,
    tags: ['react', 'accessibility']
  }],
  ['3', {
    id: 3,
    title: 'Pagination UX Tips',
    author: 'Mia Patel',
    publishedAt: '2024-11-15T09:45:00Z',
    content: `Pagination can be simple and effective with good visual affordances and accessible controls.`,
    tags: ['ux', 'frontend']
  }],
  ['4', {
    id: 4,
    title: 'Understanding CSS Shadows',
    author: 'Noah Williams',
    publishedAt: '2024-11-17T14:05:00Z',
    content: `Shadows create depth. Use layered, subtle shadows to keep the UI crisp yet dimensional.`,
    tags: ['css', 'design']
  }],
  ['5', {
    id: 5,
    title: 'Routing with React Router v6',
    author: 'Sophia Garcia',
    publishedAt: '2024-11-20T12:20:00Z',
    content: `React Router v6 simplifies route definitions and nested layouts with element props.`,
    tags: ['react', 'routing']
  }],
  ['6', {
    id: 6,
    title: 'Chips and Tags in UI',
    author: 'Ethan Johnson',
    publishedAt: '2024-11-22T16:40:00Z',
    content: `Chips signal categories and filters. Keep them compact, readable, and consistent.`,
    tags: ['components', 'ui']
  }]
]);

/**
 * PUBLIC_INTERFACE
 * PostDetailPage
 * Displays a single post details.
 */
export default function PostDetailPage() {
  const { id } = useParams();
  const post = useMemo(() => MOCK_MAP.get(String(id)), [id]);

  if (!post) {
    return (
      <div className="container">
        <div className="card">
          <h1 className="h1">Post not found</h1>
          <p className="lead">We couldn't find the post you're looking for.</p>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  const date = new Date(post.publishedAt).toLocaleDateString();

  return (
    <div className="container">
      <article className="card" aria-labelledby="post-title">
        <header className="mb-4">
          <Link to="/" className="btn secondary small" aria-label="Back to home">← Back</Link>
          <h1 id="post-title" className="h1" style={{ marginTop: 12 }}>{post.title}</h1>
          <div className="card-meta">
            <span>By {post.author}</span> · <time dateTime={post.publishedAt}>{date}</time>
          </div>
          <div aria-label="Tags">
            {post.tags?.map((t) => <span key={t} style={{ marginRight: 8 }}><Chip label={t} /></span>)}
          </div>
        </header>
        <section>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 12, whiteSpace: 'pre-wrap' }}>
            {post.content}
          </p>
        </section>
        <footer className="mb-4" style={{ marginTop: 20 }}>
          <Button as="a" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} variant="secondary">Back to top ↑</Button>
        </footer>
      </article>
    </div>
  );
}
