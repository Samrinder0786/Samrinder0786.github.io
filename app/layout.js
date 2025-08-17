import NavBar from '@/components/NavBar';
import '../styles/globals.css';
import '../styles/components.css'; // Add this line

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}