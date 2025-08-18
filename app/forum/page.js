'use client';
import ForumPostList from '@/components/ForumPostList';
import Link from 'next/link';
import NewDiscussionForm from '@/components/forum/NewDiscussionForm';
import Button from '@/components/ui/Button';

export default function ForumPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tech Discussions</h1>
        <Link href="/forum/new">
          <Button>New Discussion</Button>
        </Link>
      </div>
      <ForumPostList />
    </div>
  );
}