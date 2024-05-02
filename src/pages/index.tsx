import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <nav>
        <Link href="about">About</Link>
      </nav>
      Home Page
    </div>
  );
}

export default HomePage;
