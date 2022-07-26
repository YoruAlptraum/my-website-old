document.querySelector("my-nav").innerHTML = ` 
<nav class="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
<div class="container container-fluid">
  <a class="navbar-brand" href="#">| Portfolio</a>
  <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item">
        <a class="nav-link" href="#about-section">About me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#skills-section">My skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects-section">My projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contacts-section">Contact me</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;

document.querySelector("my-footer").innerHTML = `
<footer id="contacts-section" class="text-light bg-dark py-5">
    <div id="contact" class="container">
      <h2 class="text-center">Contact me:</h2>
      <div>
        <form id="contact-form" action="https://formsubmit.co/ozawathiago@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New submission from portfolio website!">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_next" value="https://otportfolio.netlify.app/thanks.html">

          <label for="name">Your Name:</label>
          <input id="name" type="text" name="name">
          <label for="email">Your email:</label>
          <input id="email" type="email" name="email" >
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit" class="mt-2 btn btn-primary">Submit</button>
        </form>

        <div id="contacts">
          <p><i class="far fa-envelope"></i>  ozawathiago@gmail.com</p>
          <p><i class="fab fa-whatsapp"></i> +55 43 98823-1281</p>
          <p><i class="lni lni-map-marker"></i> Londrina, Paraná</p>
          <hr style="width:50%;"> 
          <a class="text-white" href="https://github.com/YoruAlptraum">
            <i class="fab fa-github"></i>
          </a>
        </div>

      </div>
    </div>

  </footer>
`