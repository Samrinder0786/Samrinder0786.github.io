export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-600">
      <div className="container">
        <p>© {new Date().getFullYear()} CodeHive • Built with Next.js</p>
      </div>
    </footer>
  );
}
