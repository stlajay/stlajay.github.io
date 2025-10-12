---
# To add content and customize, front-end which is matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
pagination:
  enabled: true
permalink: /
---

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<style>
* {
  box-sizing: border-box;
}
body {
  background: linear-gradient(#FFA500, #FFFFFF);
  font-family: sans-serif, cursive, monospace;
}

h1{
  font-weight: bold;
  text-transform: uppercase;
}

h3 {
  font-weight: bold;
}

h5 {
  font-weight: bold;
}
.container {
  position: relative;
  width: 100%;
}

.content {
  padding: 5px 5px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

.exp {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
}

.timeframe {
  width: 600px;
  padding: 30px 20px;
}

.timeframe ul {
  border-left: 5px solid darkslategrey;
  list-style-type: none;
  padding: 10px 5px;
}

.timeframe ul li {
  padding: 20px 20px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
}

.timeframe ul li:before {
  position: absolute;
  content: '';
  width: 15px;
  height: 15px;
  background-color: darkslategrey;
  border-radius: 50%;
  left: -15px;
  top: 45px;
  transition: 0.5s;
}


.gradient-border {
  --border-width: 5px;
  position: relative;
  text-transform: uppercase;
  color: darkslategrey;
  background-image: url(assets/images/logo/background.jpg);
  border-radius: 10px;

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 10px;
    animation: moveGradient 2s alternate infinite;
  }
}

@keyframes moveGradient {
  50% { background-position: 100% 50%;  }
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 560px) {
  .container {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
</head>
<body>
<!------------ NAME HEADER ------------>
<section id="#" class="nameh" style="width:100%; height:auto; padding: 20px;">
  <div class="grid-xlarge">
    <div style="display: flex; justify-content: center; align-items: center;">
        <section style="margin-bottom: 20px; float: left;">
          <img style="width:100%; max-width: 400px;" src="assets/images/logo/profile.gif">
        </section>
        <section class="cta__text" style="font-size:60px; font-family:Roboto; line-height: 1.2;"> <br>
          <span>Hi, I am  Ajay Deshmukh.</span> <br>
          <span>A <span style="color:white">E</span>ngineer,</span><br>
          <span><span style="color:white">R</span>esearch enthusiast,</span><br>
          and <span style="color:white">E</span>ntrepreneur.
        </section>
    </div>
  </div>
</section>

<!------------ EXPERIENCE ------------>
<section id="experience" style="padding: 5px 100px 10px 100px;">
  <h1>Experience</h1>
  <div class="exp">
  <div class="timeframe">
    <ul>
      <li>
        <h3>GitHub, USA (virtual)</h3>
        <div class="frame">
          <code>allinopensource.org</code>
          <h4><i>Open Source Software Fellow</i></h4>
          <strong>January 2023 - April 2023 (<a href="" target="_blank" style="text-decoration: none;">LINK</a>)</strong>
        </div>
      </li>
      <li><h3><a href="/profile" style="text-decoration:hover: underline;">Profile</a></h3></li>
    </ul>
  </div>
  </div>
</section>

<!------------ EDUCATION ------------>
<section id="education" style=" width: 100%; padding: 3px 3px 3px 3px;">
  <div class="gradient-border">
    <div style="padding: 100px;">
    <h1>Education</h1>
    <div class="item">
      <h3>Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded, India</h3>
      <strong>July 2018 - June 2022</strong>
      <h5><i>Bachelor of Technology, Information Technology</i></h5>
      <p><i>Coursework</i> : Object Oriented Programming, Algorithms, Databases, Computer Systems, Machine Learning</p>
    </div>
  </div>
</div>
</section>

<!------------ SELECTED ARCHIVES ------------>
<section id="archives" style="width=100%; background-color: ghostwhite;">
<div class="posts">
  <div class="grid-xlarge">
    <h1 class="post_title"><span>Selected Archives</span></h1>

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

<!------------ JOURNEY ------------>
<section id="onmyway" class="cta bg-black">
  <a class="cta__link" style="background-color: palegreen; font-size: 20px;" href="{{ '/way/' | prepend: site.baseurl }}">
    <span class="cta__text">On My Way</span>
  </a>
</section>

<!--body-->