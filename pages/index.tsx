import Link from 'next/link';

function Home() {
  return (
    <div>
      <div>Welcome to next.ts </div>
      <Link href="/other">
        <a>Go to other page </a>
      </Link>
    </div>
  );
}

export default Home;

