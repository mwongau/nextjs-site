import Image from 'next/image';
import Link from 'next/link'

export default function Page() {
  return (
    <div>
	  <p><Link href="/home"> Home </Link> | 
	     <Link href="/cv"> CV </Link> | 
		 <Link href="/photos"> Photos </Link>
	  </p> 
	  <br />
	  <h1>Photos</h1>
	  <br />
	  <h3>University of Technology Sydney, Building 5</h3> <br />
      <Image src="uts-bldg5.jpg"
        width={500} height={500} alt="UTS" />
	  <br /><br />
	  <h3>Australian Catholic University, Strathfield Campus</h3> <br />
      <Image src="acu.jpg"
        width={500} height={500} alt="ACU" />
	  <br /><br />	
	  
    </div>
  );
}