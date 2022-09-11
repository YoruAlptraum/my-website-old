pt = document.querySelectorAll('[lang=pt]')
en = document.querySelectorAll('[lang=en]')
tr = document.querySelector("#translate").children

var language = window.navigator.userLanguage || window.navigator.language;
console.debug(language)
if(language.includes("pt")) switch_lang();

function switch_lang(){
  for(var i = 0; i < tr.length; i++){
    tr[i].classList.toggle('cur-lang')
  }

  pt.forEach(p => {
    p.classList.toggle('hidden')
  });
  en.forEach(e => {
    e.classList.toggle('hidden')
  });
}