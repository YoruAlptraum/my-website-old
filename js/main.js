let skills = {
  "C#" : 60,
  "JS" : 30,
  "HTML" : 80,
  "CSS" : 70,
  "SASS" : 30,
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