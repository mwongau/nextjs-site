"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Nav from './Nav.js'
import Header from './Header.js'

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
	  <Header />
	  <Nav />	  
	  <h2>Photos</h2>	  
	  <button onClick={handleClick}>Click to select next photo</button>
	  <h3>{desc[count]}</h3>
      <Image src= {images[count]}
        width={500} height={500} alt={alts[count]} />	  
    </div>
  );
}