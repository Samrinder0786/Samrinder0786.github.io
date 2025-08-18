'use client';
import Link from 'next/link';

export default function SnippetList({ items }) {
  if (!items?.length) {
    return <div className="card p-6">No snippets yet. Share your first one!</div>;
  }
  return (
    <ul className="grid gap-3">
      {items.map(s => (
        <li key={s.id} className="card p-4 flex items-center justify-between">
          <div>
            <p className="font-semibold">{s.language}</p>
            <p className="text-sm text-gray-500">Created: {s.createdAt}</p>
          </div>
          <Link className="btn btn-primary" href={`/snippets/${s.id}`}>Open</Link>
        </li>
      ))}
    </ul>
  );
}
