'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname.startsWith(href);
  return (
    <Link href={href} className={`px-3 py-2 rounded ${active ? 'bg-white text-indigo-600' : 'text-white hover:bg-indigo-400'}`}>
      {children}
    </Link>
  );
}

export default function NavBar() {
  const { theme, toggleTheme } = useApp();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/home" className="text-xl font-bold text-white">CodeHive</Link>
        <div className="flex items-center gap-2 nav-links">
          <NavLink href="/snippets">Snippets</NavLink>
          <NavLink href="/forum">Forum</NavLink>
          <NavLink href="/profile/demo">Profile</NavLink>
          <button className="btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
  );
}
