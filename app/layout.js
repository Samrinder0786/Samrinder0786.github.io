import NavBar from '@/components/NavBar';
<<<<<<< HEAD
import Footer from '@/components/Footer';
import { AppProvider } from '@/context/AppContext';
import '../styles/globals.css';
import '../styles/components.css';
=======
import '../styles/globals.css';
import '../styles/components.css'; // Add this line
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
<<<<<<< HEAD
        <AppProvider>
          <NavBar />
          <main className="container py-6">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
=======
        <NavBar />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9
