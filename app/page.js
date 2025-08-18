'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="main-title">Welcome to CodeHive</h1>
<<<<<<< HEAD

      <h3>A collaborative platform where developers share code snippets, 
          exchange knowledge, and discuss the latest in technology.
</h3>
=======
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9
      
      <div className="features-grid">
        <Link href="/snippets" className="feature-card">
          <h2>Code Snippets</h2>
          <p>Share and discover code examples</p>
        </Link>

        <Link href="/forum" className="feature-card">
          <h2>Tech Forum</h2>
          <p>Discuss programming topics</p>
        </Link>
      </div>

      <style jsx>{`
        .home-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }
        .main-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #333;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .feature-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}
