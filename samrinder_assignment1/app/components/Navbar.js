import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/counter">Counter Feature</Link>
      <Link href="/form">Form Feature</Link>
    </nav>
  );
}