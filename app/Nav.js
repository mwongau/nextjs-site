import Link from 'next/link'

export default function Nav() {
return (
<div className="nav">
	  <p><Link href="/home"> Home </Link> | 
	     <Link href="/cv"> CV </Link> | 
		 <Link href="/photos"> Photos </Link> |
		 <Link href="/blog"> Blog </Link>
	  </p> 
</div> );
}