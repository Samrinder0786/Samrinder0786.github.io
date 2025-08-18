import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AppProvider } from '@/context/AppContext';
import '../styles/globals.css';
import '../styles/components.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <NavBar />
          <main className="container py-6">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
