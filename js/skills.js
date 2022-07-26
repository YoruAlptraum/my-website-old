let skills = {
  "Windows" : 90,
  "MS Office" : 85,
  "Git" : 50,
  "C#" : 60,
  "JS" : 40,
  "HTML" : 85,
  "CSS" : 70,
  "SASS" : 30,
  "MySQL" : 70,
}

let mySkillsDom = document.querySelector("#my-skills");

Object.keys(skills).forEach(element => {
  mySkillsDom.innerHTML+=`
<div class="skill align-items-center">
  <span class="text-center">
    <h5>${element}:</h5>
  </span>
  <span class="col">
    <div class="progress">
      <div class="progress-bar bg-info" style="width: ${skills[element]}%" >
    </div>
  </span>
</div>
`
});