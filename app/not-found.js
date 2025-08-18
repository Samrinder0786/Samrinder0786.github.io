import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="forum-container" style={{textAlign:'center'}}>
      <h1 className="forum-header">404 – Page not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <div className="mt-4">
        <Link className="btn btn-primary" href="/home">Go Home</Link>
      </div>
    </div>
  );
}
