'use client';
import { use } from 'react';   
import { useApp } from '@/context/AppContext';

export default function SnippetDetail({ params }) {
  const { id } = use(params);   
  const { snippets } = useApp();

  const item = snippets.find(s => s.id === id);

  if (!item) {
    return (
      <div className="forum-container">
        <h1 className="forum-header">Snippet not found</h1>
      </div>
    );
  }

  return (
    <div className="forum-container">
      <h1 className="forum-header">Snippet • {item.language}</h1>
      <pre className="p-4 bg-gray-50 rounded border overflow-auto">
{item.code}
      </pre>
      <p className="text-sm text-gray-500 mt-2">Created: {item.createdAt}</p>
    </div>
  );
}
