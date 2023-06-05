"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((count + 1) % 2);
  }	  
  let images = ["uts-bldg5.jpg", "acu.jpg"];
  let desc = ["University of Technology Sydney, Building 5", "Australian Catholic University, Strathfield Campus"];
  let alts = ["uts", "acu"]; 
  
  return (
    <div>
	  <p><Link href="/home"> Home </Link> | 
	     <Link href="/cv"> CV </Link> | 
		 <Link href="/photos"> Photos </Link>
	  </p> 
	  <br />
	  <h1>Photos</h1>
	  <br />
	  <button onClick={handleClick}>Click to select next photo</button>
	  <br /><br />
	  <h3>{desc[count]}</h3> <br />
      <Image src= {images[count]}
        width={500} height={500} alt={alts[count]} />	  
    </div>
  );
}