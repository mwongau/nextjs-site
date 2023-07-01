import Link from 'next/link'
import Nav from '../Nav.js'
import Header from '../Header.js'

export default function Blog() {
  return (
    <> 
	<Header />
	<Nav />  
	<h2>Blog</h2>
    <Link href="/blog/first-post"> First post </Link> <br />
	<Link href="/blog/about-this-site"> About this site </Link> <br />	  
    </>
  );
}

