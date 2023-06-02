import Link from 'next/link'

export default function CV() {
  return (
    <> 
	<p><Link href="/home"> Home </Link> | 
	     <Link href="/cv"> CV </Link> | 
		 <Link href="/photos"> Photos </Link>
	  </p> 
	  
    <div className="CV">
	<br />
	<h1>CV of M Wong</h1>
	<br />
	<h3>Academic degrees</h3>
	<ul>
	<li>PhD in Computer Science </li>
	<li>M.Sc in Electronic Engineering</li>
	<li>B.Sc (Hons.) in Electrical & Electronic Engineering</li>
	</ul>
	
	<h3>Certificates</h3>
	<ul>
	<li>IBM Data Science Professional Certificate by IBM on Coursera</li>
	<li>Professional Certificate of "DeepLearning.AI TensorFlow Developer", by DeepLearning.AI on Coursera</li>
	<li>Professional Certificate in "Unlocking Information Security" by Tel Aviv University, IsraelX & edX</li>
	</ul>
		
	<h3>Research specialism</h3>
	<ul>
	<li>Computer vision</li>
	<li>Machine learning</li>
	</ul>

	<h3>Skills & experience</h3>
	<ul>
	<li>Programming languages: Python, Java, JavaScript, C++</li>
	<li>Web frameworks: Flask, Django, ReactJS</li>
	<li>Machine learning library: Tensorflow, scikit-learn, Weka</li>
	<li>Computer vision library: OpenCV, scikit-image</li>
	</ul>
	</div>
	  
    </>
  );
}

