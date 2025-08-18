'use client';
import { useApp } from '@/context/AppContext';
import ForumPostCard from './forum/ForumPostCard';

export default function ForumPostList() {
  const { discussions } = useApp();

  return (
    <div className="forum-container">
      <h1 className="forum-header">Developer Discussions</h1>

      {discussions.length === 0 ? (
        <div className="card p-6 text-center">No posts yet. Be the first to start a topic!</div>
      ) : (
        <div className="discussion-list">
          {discussions.map(d => <ForumPostCard key={d.id} post={d} />)}
        </div>
      )}
    </div>
  );
}
