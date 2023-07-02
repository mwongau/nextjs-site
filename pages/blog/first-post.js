import Link from 'next/link';
import Nav from '../Nav.js'
import Header from '../Header.js'

export default function FirstPost() {
  return (
  <div>
  <Header />
  <Nav />
  <h2>Blog</h2>
  <p>Title: First post</p>
  <p>Date: 3-7-2023</p>
  <p>This is my first post of this blog.</p>
  <br />
  
  </div>
  );
}
