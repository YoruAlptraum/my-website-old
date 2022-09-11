const pt = document.querySelectorAll('[lang=pt]')
const en = document.querySelectorAll('[lang=en]')
const tr = document.querySelector("#translate") !== null
// console.debug(tr)

const language = window.navigator.userLanguage || window.navigator.language;
console.debug(language)
if(language.includes("pt")) switch_lang();

function switch_lang(){
  if(tr !== false){
    c = document.querySelector("#translate").children
    for(let i = 0; i < c.length; i++){
      c[i].classList.toggle('cur-lang')
    }
  }

  pt.forEach(p => {
    p.classList.toggle('hidden')
  });
  en.forEach(e => {
    e.classList.toggle('hidden')
  });
}