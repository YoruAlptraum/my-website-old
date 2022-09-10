let skills = {
  "Programming" : "C# - C - JavaScript - Python",
  "Web": "Html - CSS - Bootstrap - Sass",
  "Databases" : "MySQL - SQL Server",
  "Tecnologies" : "VS Code - MS Office - Git/GitHub - Unity"
}

let mySkillsDom = document.querySelector("#my-skills");

Object.keys(skills).forEach(key => {
  mySkillsDom.innerHTML+=`
  <div class="skill">
    <b>${key}:</b>
    <p>${skills[key]}</p>
  </div>
`
});