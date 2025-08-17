'use client';
import { useState } from 'react';

export default function ForumPostList() {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: 'Best practices for React performance optimization',
      author: 'DevTeam',
      date: '2024-06-15',
      replies: 8,
      views: 245,
      tags: ['react', 'performance']
    },
    {
      id: 2,
      title: 'Next.js vs Remix: Comparative analysis for 2024 projects',
      author: 'FrameworkExpert',
      date: '2024-06-10',
      replies: 12,
      views: 320,
      tags: ['nextjs', 'remix', 'frameworks']
    }
  ]);

  return (
    <div className="forum-container">
      <h1 className="forum-header">Developer Discussions</h1>
      
      <div className="discussion-list">
        {discussions.map(discussion => (
          <div key={discussion.id} className="discussion-card">
            <div className="discussion-main">
              <h3 className="discussion-title">{discussion.title}</h3>
              <div className="discussion-meta">
                <span>Posted by {discussion.author}</span>
                <span>{discussion.date}</span>
              </div>
              <div className="discussion-tags">
                {discussion.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="discussion-stats">
              <div className="stat">
                <span className="stat-value">{discussion.replies}</span>
                <span className="stat-label">Replies</span>
              </div>
              <div className="stat">
                <span className="stat-value">{discussion.views}</span>
                <span className="stat-label">Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}