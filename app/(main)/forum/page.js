'use client';
import ForumPostList from '@/components/ForumPostList';

export default function ForumPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tech Discussions</h1>
      <ForumPostList />
    </div>
  );
}