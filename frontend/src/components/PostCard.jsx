import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Chip from './Chip';

/**
 * PUBLIC_INTERFACE
 * PostCard
 * Compact card for a blog post preview.
 */
export default function PostCard({ post }) {
  const date = new Date(post.publishedAt).toLocaleDateString();

  return (
    <article className="card" aria-labelledby={`post-title-${post.id}`}>
      <header>
        <h3 id={`post-title-${post.id}`} className="h2 card-title">
          <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {post.title}
          </Link>
        </h3>
        <div className="card-meta">
          <span aria-label="Author">By {post.author}</span> ·{' '}
          <time dateTime={post.publishedAt}>{date}</time>
        </div>
        <div className="mb-3" aria-label="Tags">
          {post.tags?.map((t) => <span key={t} style={{ marginRight: 8 }}><Chip label={t} /></span>)}
        </div>
      </header>
      <p className="lead mb-4">{post.excerpt}</p>
      <footer>
        <Link className="btn" to={`/post/${post.id}`} aria-label={`Read ${post.title}`}>Read more</Link>
      </footer>
    </article>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};
