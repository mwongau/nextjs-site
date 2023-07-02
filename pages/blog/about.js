import Link from 'next/link'
import Nav from '../Nav.js'
import Header from '../Header.js'

export default function About() {
  return (
  <div>
  <Header />
  <Nav />
  <h2>Blog</h2>
  <p>Title: About this site</p>
  <p>Date: 3-7-2023</p>
  <p>This site is built by using Next.js, JavaScript, HTML and CSS. Hosting is
     done by Github Pages</p>
  <br />
  
  </div>
  );
}
