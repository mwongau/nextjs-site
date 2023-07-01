import Link from 'next/link';

export default function FirstPost() {
  return (
  <div>
  <h2>Blog</h2>
  <p>This is my first post of this blog.</p>
  <br />
  <Link href="/home"> Home </Link>
  </div>
  );
}
