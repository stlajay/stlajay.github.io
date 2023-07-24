---
layout: default
pagination:
  enabled: true
permalink: /
---
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<style type="text/css">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: ghostwhite;
    font-family: Apercu, "Ink Free", Tahoma, cursive, sans-serif, -apple-system, Ubuntu, monospace;
}
.wrap-around {
  padding: 100px; width: 80%; margin:0;
}
/************ EXPERIENCE ************/
.experience {
  background-color: palegreen;
  border-radius: 0 100px 0 100px;
  margin: 0;
  padding: 0 0 0 0;
}
.job-item {
  padding: 16px 0 16px 0;
}
.job-item a:hover {
  color: #FF0000;
}
.job-summary {
  padding: 0 0 0px 16px;
}
/************ SKILLS ************/
.skills-item {
  padding: 10px;
}
.skill-title {
  padding: 5px;
}
.skill-text {
  padding: 5px;
}
hr.skill-tag {
  margin: 0;
  width: 100%;
  height: 10px;
  border-radius: 4px;
  border-color: blue;
  background-color: midnightblue;
  border: 0;
}
hr.skill-tag:hover, after {
  content: 'Skills';
  display: block;
  border-color: darkslateblue;
  border-bottom: solid darkslateblue;
}
hr.hr1:hover, after{max-width: 90%;}
hr.hr2:hover, after{max-width: 70%;}
hr.hr3:hover, after{max-width: 80%;}
hr.hr4:hover, after{max-width: 85%;}
/************ EDUCATION ************/
.education {
  background-position: top right;
  border-radius: 0 0 0 0;
  padding-bottom: 100px;
}
.education p {
  width: 60%;
}
.education-wrap {
  padding: 16px 0 16px 0;
}
@media screen and (max-width: 720px) {
  html {
    scroll-behavior: smooth;
  }
}
</style>
</head>
<body>
<main>
<!--------------------- MAIN NAME PAGE ---------------------->
<section  style="width:100%; background-color: #FFAC1C; height:640px; border-radius: 0 0 0 100px;">
<div class="section_hea dbox" style="display: flex; align-items: center; justify-content: center;">
  <section class="centemr">
          <img style="width:80%;" src="./assets/images/logo/profile.gif"> <!-- PROFILE IMAGE -->
  </section>
  <br>
  <section class="cta__text" id="#name_section" style="font-size: 6cap; font-family: Apercu; padding-top: 50px;">
    <span>Hi, I am Ajay Deshmukh.</span> <br>
      <span>A <span style="color: ghostwhite;">E</span>ngineer,</span> <br>
      <span><span style="color: ghostwhite;">&nbsp;&nbsp;R</span>esearch,</span> <br> 
      and <span style="color: ghostwhite;">T</span>ech-Savvy.
  </section>
</div>
</section>
<!--------------------- MAIN EXPERIENCE ---------------------->
<section class="experience">
<div class="wrap-around item-details divider" style="font-family: Apercu;">
 <h1>EXPERIENCE</h1>
 <p>See my complete work history on <a href="https://www.linkedin.com/in/stlajay/">LinkedIn</a>.</p>
 <!-- Job 1 -->
 <section class="job-item">
    <div class="job-details">
        <h3>SISTMR Australia</h3>
        <i>Research Intern</i>
        <p>January 2022 – May 2022</p>
    </div>
    <div class="job-summary">
        <p>Key contributions:</p>
        <ul class="job_list">
            <li>Worked on brute force, sniffer tools, code analysis and <b>exploitation development</b> tasks.</li>
            <li>Tested <b>vulnerabilities</b> in the network and website applications with <b>84%</b> accuracy using open source tools.</li>
            <li>Examined the 4+ complex software applications operating on the <b>virtual machine</b>.</li>
        </ul>
     </div>
 </section>
 <!-- Job 2 -->
 <section class="job-item">
    <div class="job-details">
        <h3>Microsoft Future Ready</h3>
        <i>Winter Intern</i>
        <p>September 2021 – December 2021</p>
    </div>
    <div class="job-summary">
        <p>Top 1000+ <a href="#">performer</a> in Microsoft Azure project development</p>
        <p>Key contributions:</p>
        <ul class="job_list">
        <li>Utilized the <b>18+</b> laboratory <b>cloud computing</b> practise from the <a href="https://learn.microsoft.com/en-us/training/">Microsoft Learn</a> documentation.</li>
        <li>Deployed the prototype on <a href="https://azure.microsoft.com/en-in/products/app-service/web/">Microsoft Azure</a> with <b>cloud storage</b> using the web app on a container.</li>
        </ul>
    </div>
 </section>
</div>
</section>


<!--------------------- MAIN Skills ---------------->
<section class="skills" style="background-color:antiquewhite; border-radius: 0 100px 0 0;">
  <div class="wrap-around content-wrap ">
    <h1>SKILLS</h1>
    <div class="skills-item">
      <h3 class="skill-title"><strong>Programming</strong></h3> <hr title="90%" class="skill-tag hr1">
      <p class="skill-text">C++, HTML/CSS, JavaScript, NodeJS, SQL, Git, bash, React</p>
    </div>
    <div class="skills-item">
      <h3 class="skill-title"><strong>Cybersecurity</strong></h3> <hr title="70%" class="skill-tag hr2">
      <p class="skill-text">Ethical Hacking, Python, Open Source tools, Research Analysis</p>
    </div>
    <div class="skills-item">
      <h3><strong>Engineering</strong></h3> <hr title="80%" class="skill-tag hr3">
      <p class="skill-text">Algorithms, Databases, Computer Systems, Cloud computing, Website Development</p>
    </div>
    <div class="skills-item">
      <h3 class="skill-title"><strong>Leadership and Management</strong></h3> <hr title="85%" class="skill-tag hr4">
      <p class="skill-text">Creative Problem-solving, Product Management, Time Management, Corporation</p>
    </div>
  </div>
</section>


<!--------------------- MAIN EDUCATION & CERTIFICATIONS ---------------->
<section class="education" style="background-image: url(./assets/images/logo/edu.jpg); background-size: cover; padding: 0; margin:0;">
<div class="wrap-around item-details" style="font-family: Apercu;">
  <h1>EDUCATION</h1>
  <section class="education-wrap">
    <h3>Shri Guru Gobind Singhji Institute of Engineering and Technology - <i>Nanded, IN</i></h3>
      <p>Bachelors of Technology, Information Technology, 2018-2022</p>
      <p><b>Coursework</b>: Algorithms, Databases, Computer Networking, Machine Learning, Cryptography</p>
  </section>
    <section class="education-wrap">
        <h3>Golden Kids Junior College - <i>Amravati, IN</i></h3>
        <p>Higher Secondary Certification, 2016-2017</p>
    </section>
  <h1>CERTIFICATION</h1>
    <section class="education-wrap">
        <h3>Google IT Support Professional Certification - <i>Google</i></h3>
        <p>Coursera: <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/HY4J8BN8GV7J" target="_blank">Link</a>, 2020</p>
    </section>
  <section class="education-wrap">
        <h3>Python for Everybody - <i>University of Michigan</i></h3>
        <p>Coursera: <a href="https://www.coursera.org/account/accomplishments/certificate/VHU6AJ3WUKQK" target="_blank">Link</a>, 2020</p>
    </section>
</div>
</section>


<!--------------------- MAIN PROJECTS & BLOG ---------------->
<section id="projects" style="width=100%; background-color: whitesmoke">
<div class="posts">
  <div class="wrap-around">
    <h2 class="post_title">
      <span>SELECTED PROJECTS</span>
    </h2>

    <div class="posts__container" data-columns>
      {% assign sorted_projects = site.posts | sort: 'highlight' %}
      {% for post in sorted_projects %}

        <!-- The tag below includes the markup for each post - partials/post-card.html -->
        {% include post-card.html %}

      {% endfor %}
    </div>
    
  </div>
</div>
</section>

<!--------------------- Forward ---------------->
<section id="waving" class="cta bg-black">
  <a class="cta__link" style="background-color: palegreen" href="{{ '/forward/' | prepend: site.baseurl }}">
    <span class="cta__text">I'm On My Way</span>
  </a>
</section>

</main>