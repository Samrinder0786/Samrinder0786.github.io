import Link from 'next/link';
import styles from '../styles/components.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/home" className="text-xl font-bold">CodeHive</Link>
        <div className="nav-links">
          <Link href="/snippets">Snippets</Link>
          <Link href="/forum">Forum</Link>
        </div>
      </div>
    </nav>
  );
}