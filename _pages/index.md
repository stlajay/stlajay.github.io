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
  padding: 80px;
}
/* VERTICAL GRID LINE */
.y-grid {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
}
.y-grid::after {
  content: '';
  position: absolute;
  width: 4px;
  background-color: navy;
  top: 10%;
  bottom: 15%;
  left: 20px;
}
.container {
  padding: 10px 20px;
  position: relative;
  width: 100%;
}
.container::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  left: 15px;
  background-color: navy;
  top: 30%;
  border-radius: 50%;
}
.content {
  padding: 5px 10px;
  border-radius: 6px;
}
/************ SKILLS ************/
.skills-item {
  padding: 10px;
}
.skill-title {
  padding: 5px;
  font-size: 25px;
}
.skill-text {
  padding: 5px;
}
.skill-text code {
  font-size: 15px;
  font-weight: bold;
  padding: 5px;
  background-color: whitesmoke;
}
hr.skill-tag {
  margin: 0;
  width: 100%;
  height: 10px;
  border-radius: 4px;
  border-color: blue;
  background-color: navy;
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
  color: black;
}
.education p {
  width: 60%;
  font-size: 18px;
}
.education-ul {
  padding-left: 15px;
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
<section  style="width:100%; background-color: #FFAC1C; height: 640px; border-radius: 0 0 0 100px;">
<div class="section_hea dbox" style="display: flex; align-items: center; justify-content: center;">
  <section class="centemr">
          <img style="width:80%;" src="./assets/images/logo/profile.gif"> <!-- PROFILE IMAGE -->
  </section>
  <br>
  <section class="cta__text" id="#name_section" style="font-size: 6cap; font-family: Apercu; line-height: 1.2; padding-top: 50px;">
    <span>Hi, I am Ajay Deshmukh.</span> <br>
      <span>A<span style="color: ghostwhite;">&nbsp;&nbsp;R</span>esearch enthusiast,</span> <br> 
      and <span style="color: ghostwhite;">T</span>ech-Savvy.
  </section>
</div>
</section>

<!--------------------- MAIN EXPERIENCE ---------------------->
<section class="experience">
<div >
  <div style=" display: flex; flex-direction: column;">
    <div class="y-grid">
      <span style="font-size:36px; text-transform:uppercase;"><b>Experience</b></span>
      <br>
      <div class="container">
        <div class="content">
          <h3>GitHub's All In Open Source</h3>
          <em>January '23 - April '23</em>
        </div>
      </div>
      <div class="container">
        <div class="content">
          <h3>Society for Innovation in Scientific, Technological and Medical Research, Australia</h3>
          <em> January '22 - May '22</em>
        </div>
      </div>
      <div class="container">
        <div class="content">
          <h3>Microsoft Future Ready, India</h3>
          <em>September '21 - December '21</em>
        </div>
      </div>
      <div class="container">
        <div class="content">
          <h3>Internshala Student Partner, India</h3>
          <em>November '20 - January '21</em>
        </div>
      </div>
      <div class="container">
        <div class="content">
          <h3>Indian Science Festival, IISER Pune</h3>
          <em>January 2019</em>
        </div>
      </div>
      <div class="container">
        <div class="content">
          <h3 style="text-transform: uppercase;"><a href="./profile" target="_blank">Profile</a> ...</h3>
        </div>
      </div>
      <hr>
    </div>
  </div>
</div>
</section>

<!--------------------- MAIN Skills ---------------->
<section class="skills" style="background-color:antiquewhite; border-radius: 0 100px 0 0;">
  <div class="wrap-around content-wrap ">
    <h1>SKILLS</h1>
    <div class="skills-item">
      <h3 class="skill-title"><strong>Programming</strong></h3> <hr title="90%" class="skill-tag hr1">
        <p class="skill-text">
          <code>C++</code> <code>HTML/CSS</code>
          <code>JavaScript</code><code>NodeJS</code>
          <code>SQL</code> <code>Git</code>
          <code>bash</code> <code>React</code>
        </p>
    </div>
    <div class="skills-item">
      <h3 class="skill-title"><strong>Cybersecurity</strong></h3> <hr title="70%" class="skill-tag hr2">
        <p class="skill-text">
          <code>Ethical Hacking</code> <code>Python</code>
          <code>Open Source tools</code> <code>Research Analysis</code>
        </p>
    </div>
    <div class="skills-item">
      <h3 class="skill-title"><strong>Engineering</strong></h3> <hr title="80%" class="skill-tag hr3">
        <p class="skill-text">
          <code>Algorithms</code> <code>Databases</code> <code>Computer Systems</code>
          <code>Cloud computing</code> <code>Website Development</code>
        </p>
    </div>
    <div class="skills-item">
      <h3 class="skill-title"><strong>Leadership and Management</strong></h3> <hr title="85%" class="skill-tag hr4">
        <p class="skill-text">
          <code>Creative Problem-solving</code> <code>Product Management</code>
          <code>Time Management</code> <code>Corporation</code>
        </p>
    </div>
  </div>
</section>

<!--------------------- MAIN EDUCATION & CERTIFICATIONS ---------------->
<section class="education" style="background-image: url(./assets/images/logo/pencil.jpg); background-size: cover; padding: 0; margin:0;">
<div class="wrap-around item-details" style="font-family: Apercu;">
  <h1>EDUCATION</h1>
  <section class="education-wrap">
    <h3>Shri Guru Gobind Singhji Institute of Engineering and Technology - <i>Nanded, IN</i></h3>
      <p>Bachelors of Technology, Information Technology, 2018-2022</p>
      <p><b>Coursework</b>: Algorithms, Databases, Computer Networking, Machine Learning, Cryptography</p>
  </section>
    
  <h1>CERTIFICATION</h1>
  <section class="education-wrap">
        <h3>Blockchain</h3>
         <i>University of Buffalo, 500 S. State Street, Ann Arbor, MI 48109 USA</i>
        <p>Coursera: <a href="https://www.coursera.org/account/accomplishments/" target="_blank">Link</a>, 2020</p>
    </section>
    <section class="education-wrap">
        <h3>Google IT Support Professional Certification</h3>
         <i>Google, Mountain View, California.</i>
        <p>Coursera: <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/HY4J8BN8GV7J" target="_blank">Link</a>, 2020</p>
    </section>
  <section class="education-wrap">
        <h3>Python for Everybody</h3>
         <i>University of Michigan, 500 S. State Street, Ann Arbor, MI 48109 USA</i>
        <p>Coursera: <a href="https://www.coursera.org/account/accomplishments/certificate/VHU6AJ3WUKQK" target="_blank">Link</a>, 2020</p>
    </section>
</div>
</section>

<!--------------------- MAIN ARCHIVES & BLOG ---------------->
<section id="projects" style="width=100%; background-color: whitesmoke;">
<div class="posts">
  <div class="wrap-around">
    <h2 class="post_title">
      <span style="font-family: Apercu, Tahoma, cursive, sans-serif, -apple-system, Ubuntu, monospace;">SELECTED ARCHIVES</span>
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
  <a class="cta__link" style="background-color:palegreen;" href="{{ '/forward/' | prepend: site.baseurl }}">
    <span class="cta__text">I'm On My Way</span>
  </a>
</section>

</main>