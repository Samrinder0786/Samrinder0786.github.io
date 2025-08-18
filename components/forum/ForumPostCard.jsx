'use client';
import Link from 'next/link';
import ForumStats from './FormStats';
import ForumTag from './ForumTag';

export default function ForumPostCard({ post }) {
  return (
    <div className="discussion-card">
      <div className="discussion-main">
        <Link href={`/forum/${post.id}`} className="discussion-title block hover:underline">
          {post.title}
        </Link>
        <div className="discussion-meta">
          <span>Posted by {post.author}</span>
          <span>{post.date}</span>
        </div>
        <div className="discussion-tags">
          {post.tags.map(t => <ForumTag key={t} value={t} />)}
        </div>
      </div>
      <ForumStats replies={post.replies} views={post.views} />
    </div>
  );
}
