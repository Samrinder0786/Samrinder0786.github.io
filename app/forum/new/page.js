'use client';
import NewDiscussionForm from '@/components/forum/NewDiscussionForm';
import Link from 'next/link';

export default function NewDiscussionPage() {
  return (
    <div className="forum-container">
      <div className="mb-4">
        <Link href="/forum" className="text-blue-500 hover:underline">
          &larr; Back to discussions
        </Link>
      </div>
      <NewDiscussionForm />
    </div>
  );
}