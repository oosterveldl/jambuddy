import Link from 'next/link';

function Other() {
  return (
    <div>
      <div>This is another page</div>
      <Link href="/">
        <a>Go to home page</a>
      </Link>
    </div>
  );
}

export default Other;
