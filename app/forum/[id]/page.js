'use client';
import { use } from 'react'; 
import { useState, useEffect } from 'react';
import { getDiscussionById, addComment } from '@/services/ForumAPI';
import { useApp } from '@/context/AppContext';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Skeleton from '@/components/ui/Skeleton';
import Link from 'next/link';

export default function ForumDetail({ params }) {
  const { id } = use(params); 
  const { fetchDiscussion, createComment } = useApp();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const loadPost = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchDiscussion(id);
        setPost(data);
        // Simulate view count increment
        setViewCount(data.views || 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [id, fetchDiscussion]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    setIsSubmitting(true);
    try {
      await createComment(id, {
        author: 'CurrentUser', // In a real app, use authenticated user
        content: comment
      });
      setComment('');
      // Refresh the post to show new comment
      const updatedPost = await fetchDiscussion(id);
      setPost(updatedPost);
      setViewCount(prev => prev + 1); // Increment view count on comment
    } catch (err) {
      console.error('Failed to post comment:', err);
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="forum-container">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <div className="flex gap-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="forum-container">
        <h1 className="forum-header">Discussion not found</h1>
        <p className="mb-4">{error || 'The requested discussion could not be loaded.'}</p>
        <Link href="/forum" className="btn btn-primary">
          Back to Forum
        </Link>
      </div>
    );
  }

  return (
    <article className="forum-container">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="forum-header">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-2">
            Posted by <span className="font-medium">{post.author}</span> on {post.date}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{viewCount} views</span>
            <span>{post.replies} comments</span>
          </div>
        </div>
        <Link href="/forum" className="btn btn-secondary">
          Back to Forum
        </Link>
      </div>

      <div className="mb-4 flex gap-2">
        {post.tags.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <Card className="p-6 mb-8">
        <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
          {post.content}
        </div>
      </Card>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Comments ({post.replies})</h2>
        </div>
        
        {post.comments.length === 0 ? (
          <Card className="p-6 text-center text-gray-500">
            No comments yet. Be the first to reply!
          </Card>
        ) : (
          <div className="space-y-4">
            {post.comments.map(comment => (
              <Card key={comment.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-indigo-600 dark:text-indigo-400">
                    {comment.author}
                  </span>
                  <span className="text-sm text-gray-500">
                    {comment.date}
                  </span>
                </div>
                <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                  {comment.content}
                </p>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Add a Comment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
            rows={4}
            placeholder="Write your comment here..."
            required
          />
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="min-w-[120px]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Posting...
                </span>
              ) : 'Post Comment'}
            </Button>
          </div>
        </form>
      </section>
    </article>
  );
}