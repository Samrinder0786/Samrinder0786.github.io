'use client';
import { useState, useEffect } from 'react';
import ForumPostCard from './ForumPostCard';
import Button from '../ui/Button';
import Link from 'next/link';
import { getDiscussions } from '@/services/ForumAPI';

export default function ForumPostList() {
  const [discussions, setDiscussions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDiscussions = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getDiscussions();
      setDiscussions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  return (
    <div className="forum-container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="forum-header">Tech Discussions</h1>
        <Link href="/forum/new">
          <Button>New Discussion</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="flex gap-2">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="card p-6 text-center text-red-500">
          <p>Error loading discussions: {error}</p>
          <Button onClick={fetchDiscussions} className="mt-4">
            Retry
          </Button>
        </div>
      ) : discussions.length === 0 ? (
        <div className="card p-6 text-center">
          <p>No discussions yet. Be the first to start one!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <ForumPostCard key={discussion.id} post={discussion} />
          ))}
        </div>
      )}
    </div>
  );
}