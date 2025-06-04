import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <h1>Welcome to My Application</h1>
      <p>Welcome to the homepage of my CPAN144 Assignment 1.</p>
      <p>Use the menu above to browse through the various features.</p>
    </div>
  );
}