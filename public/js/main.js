// recuperer tout les chiffres
let chiffres = document.querySelectorAll('.chiffre');
let operateur = document.querySelectorAll('.operation');

let btnClear = document.querySelector('.clear')
//recuperer champ d'affichage 
let champAffich = document.querySelector('.number');


chiffres.forEach(el =>{
    el.addEventListener("click", ()=> {
        champAffich.innerHTML += el.innerText
    })
})

operateur.forEach(el =>{
    el.addEventListener('click', ()=> {
        champAffich.innerHTML += el.innerText
    })
})

btnClear.addEventListener('click', ()=> {
    champAffich.innerHTML=""
})
