import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

import Nav from './Nav.js'
import Header from './Header.js'

export default function Home() {
  return (
      <div>    
	  <Header />	  
	  <Nav />
	  <h2>Home</h2>	  
	  <p>Welcome to my personal site. I am a researcher in computer vision and machine learning 
	  with Ph.D in Computer Science, M.Sc and B.Sc(Hons.) in Electronic Engineering. I am also 
	  interested in web app development. This site is built by using Next.js, JavaScript, 
	  HTML and CSS. This site is hosted by GitHub Pages.</p>
	  
	  <p className={styles.footer}>This site might use cookies to improve the browsing experience of users. If you 
	  continue to use this site, it will be assumed that you agree to the use of cookies.</p> 
      
    </div>
  );
}