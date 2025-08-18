import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to CodeHive</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <Link href="/snippets" className="border p-6 rounded-lg hover:bg-indigo-50">
          <h2 className="text-xl font-semibold">Code Snippets</h2>
          <p>Share and discover code examples</p>
        </Link>
        <Link href="/forum" className="border p-6 rounded-lg hover:bg-indigo-50">
          <h2 className="text-xl font-semibold">Forum</h2>
          <p>Discuss tech topics</p>
        </Link>
      </div>
    </div>
  );
}