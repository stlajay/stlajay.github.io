---
layout: default
pagination:
  enabled: true
permalink: /
---
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<style>
* {
  box-sizing: border-box;
}
body {
  background-color: ghostwhite;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 600px;
  margin-left: 100px;
  margin-right: 150px;
}
/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 3px;
  background-color: #FFAC1C;
  top: 10%;
  bottom: 15%;
  left: 0%;
  margin-left: 0px;
}
/* Container around content */
.container {
  padding: 5px 20px;
  position: relative;
  background-color: white;
  width: 100%;
}
/* The circles on the timeline */
.container::after {
  content: ' ';
  position: absolute;
  width: 13px;
  height: 13px;
  right: 50px;
  background-color: #FFAC1C;
  top: 30px;
  border-radius: 50%;
}
/* Place the container to the left */
/* .left {
  left: 0;
} */
/* Place the container to the right */
/* .right {
  left: 0%;
} */
/* Add arrows to the left container (pointing right) */
/* .left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 5px 0 5px 5px;
  border-color:  palegreen;
} */
/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 10px;
  border: medium solid white;
  border-width: 5px 5px 5px 0;
  border-color: transparent white transparent transparent;
}
/* Fix the circle for containers on the right side */
.right::after {
  left: -5px;
}
/* The actual content */
.content {
  padding: 5px 5px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}
/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 500px) {
  /* Place the timelime to the left */
  /* .timeline::after {
  left: 31px;
  }  */
  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  }
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
  left: 0px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  }
  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 5px;
  } 
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
}
</style>
</head>
<body>
<section id="#" class="cont" style="width:100%; background-color: #FFAC1C; height:600px">
  <div class="grid-xlarge">
  <div style="display: flex">
      <!-- <section style="margin-left:70px; margin-right:10px"><img style="width:400px;" 
      src="assets/images/logo/22.png" />
      </section> -->
      <section class="center" style="margin-left:90px;">
        <img style="width:60%;" src="assets/images/logo/profile.gif"> <!-- PROFILE IMAGE -->
      </section>
      <section class="cta__text" style="margin-right:0px; margin-top:20px; text-justify: auto; font-size:70px; font-family:Apercu">
      <span>Hi, I am Ajay Deshmukh.</span> <br>
      <span>A <span style="color: ghostwhite;">C</span>reator,</span><br>
      <span><span style="color: ghostwhite;"> E</span>ngineer,</span><br>
      and <span style="color: ghostwhite;">E</span>ntrepreneur.
      </section>
  </div>
  </div>
</section> 

<!---------- RESUME ---------->
<div class="grid-xlarge">
<div style="display: flex; ">
<div class="timeline" >
<span style="font-family:Apercu; font-size:20px; color: #FFAC1B">EXPERIENCE</span>
<br>
  <div class="container right" >
    <div class="content">
      <h5 >SISTRM Australia, Research Intern</h5>
      <p style="font-size:12px">jan 2022 - May 2022 </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h5>Microsoft Pvt.LTD, Wintern Intern (Microsoft Future Ready)</h5>
      <p style="font-size:12px">Sept 2021 - Dec 2021 </p>
    </div>
  </div>
  <div class="container right" >
    <div class="content">
      <h5>Internshala Inc., Internshala Student Partner (ISP) 20 </h5>
      <p style="font-size:12px">Nov 2020 - Jan 2021 </p>
    </div>
  </div>
</div>
<section style=" margin-left:20px">
<span style="font-family:Apercu; font-size:20px; color:#FFAC1B">SKILLS</span>
<div class="container">
  <p style="font-size:16px; margin-top:10px"><strong>Programming</strong></p>
  <div class="progress" style="width:100%">
    <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" 
    style="width:85%; background-color:rgba(234, 224, 204, 0.5)">
      85%
    </div>
  </div>
  <p style="margin-top:-15px; color:rgb(128, 126, 127); font-size:12px">C++, HTML/CSS, JavaScript, NodeJS, SQL, Git, bash, React</p>
  <p style="font-size:16px; "><strong>Cybersecurity</strong></p>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" 
    style="width:95%; background-color:rgba(234, 221, 204, 1.1)">
      95%
    </div>
  </div>
  <p style="margin-top:-15px; color:rgb(128, 126, 127); font-size:12px">Ethical Hacking, Python, Open Source tools, Rsearch Analysis</p>
  <p style="font-size:16px"><strong>Engineering</strong></p>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" 
    style="width:80%; background-color:rgba(234, 224, 204, 0.5)">
      80%
    </div>
  </div>
  <p style="margin-top:-15px; color:rgb(128, 126, 127); font-size:12px"> Algorithms, Databases, Computer Systems, Cloud computing, Website Development </p>
  <p style="font-size:16px; "><strong>Leadership & Management</strong></p>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" 
    style="width:90%; background-color:rgba(234, 221, 204, 1.1)">
      90%
    </div>
  </div> 
    <p style="margin-top:-15px; color:rgb(128, 126, 127); font-size:12px">Creative Problem-solving,Product Management, Time Management, Corporation </p>
</div>
</section>
</div>

<div class="honors" style="display: flex;  margin-top:25px;  margin-bottom:50px">
<section class="awards" style="max-width: 1000px; margin-left:100px;margin-right:170px;">
 <span style="font-family:Apercu; font-size:20px; color:#FFAC1B">SELECTED ACHIEVEMENTS
 <span style="font-family:Apercu; font-size:12px; color:#FFAC1B">(4/9)</span>
 </span>
 <div style="margin-top:20px; display: flex">
  <div style="color:#FFAC1B">FEB 2022</div>
  <div style="margin-left:20px; font-size:14px;" >
    <h5 style ="margin-top:0px">National Finalist</h5>
      <span style =" color:rgb(140, 140, 140); font-size:12px;" >
      <b>Indian Army Cybersecurity Hackathon</b> Top 75th/20000+ performer of the national finalists.
      </span>
  </div>
</div>
 <div style=" margin-top:20px; display: flex">
  <div style="color:#FFAC1B">JAN 2022</div>
  <div style="margin-left:20px; font-size:14px;" >
    <h5 style ="margin-top:0px">Top Performer</h5>
      <span style =" color:rgb(140, 140, 140); font-size:12px;" >
      <b>Microsoft Future Ready</b> Top 300/9560+ performer in Microsoft Azure project development. 
      </span>
  </div>
</div>
 <div style=" margin-top:20px; display: flex">
  <div style="color:#FFAC1B">OCT 2021</div>
  <div style="margin-left:20px; font-size:14px;" >
    <h5 style ="margin-top:0px">Recognition Award</h5>
      <span style =" color:rgb(140, 140, 140); font-size:12px;" >
      Gift box and recognition badge, <b>Google Cloud</b>.
      </span>
  </div>
</div>
 <div style=" margin-top:20px; display: flex">
  <div style="color:#FFAC1B">JAN 2022</div>
  <div style="margin-left:20px; font-size:14px;" >
    <h5 style ="margin-top:0px">Position Award</h5>
    <span style =" color:rgb(140, 140, 140); font-size:12px;" >
    Ranked 71st position out of 21557+ participants in the <b>Internshala Student Partner</b>.
    </span>
  </div>
</div>
</section>

<section class="patents" style="margin-left:20px; max-width: 490px;  ">
<span style="font-family:Apercu; font-size:20px; color:#FFAC1B">EDUCATION
    <span style="font-family:Apercu; font-size:12px; color:#FFAC1B">(Recent)</span>
  </span>
<div style="margin-left:20px; margin-top:20px; font-size:14px;" >
    <h4 style ="margin-top:0px">Shri Guru Gobind Singhji Institute of Engineering and Technology</h4>
    <p style ="margin-top:0px">July 2018 -- August 2022</p>
    <h5 style ="margin-top:0px"><i>Bachelor of Technology</i>, Information Technology</h5>
  </div>
</section>

</div>
</div>

<section id="projects" style="width=100%; background-color:rgba(180, 180, 180, 0.15)">
<div class="posts">
  <div class="grid-xlarge">
    <h2 class="post_title">
      <span>Selected Projects</span>
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


<section id="waving" class="cta bg-black">
  <a class="cta__link" style="background-color: palegreen" href="{{ '/forward/' | prepend: site.baseurl }}">
    <span class="cta__text">I'm On My Way</span>
  </a>
</section>
