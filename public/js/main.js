// recuperer tout les chiffres
let chiffres = document.querySelectorAll('.chiffre');
let operateur = document.querySelectorAll('.operation');
let btnEgale = document.querySelector('.egale')
let btnClear = document.querySelector('.clear')
//recuperer champ d'affichage 
let champAffich = document.querySelector('.number');
let nb1
let nb2
let op

// console.log(chiffres);
chiffres.forEach(el =>{
    el.addEventListener("click", ()=> {
        champAffich.innerHTML += el.innerText
        if (champAffich.innerText.length > 2) {
            nb2 = champAffich.innerHTML.substr(0,1)
        } else {
            nb2 = champAffich.innerHTML            
        }
        // nb2 = champAffich.innerHTML
    })
})

operateur.forEach(el =>{
    el.addEventListener('click', () => {
        nb1 = nb2
        champAffich.innerHTML=""
        champAffich.innerHTML += el.innerText
        op= el.innerText

    })
})

btnClear.addEventListener('click', ()=> {
    champAffich.innerHTML=""
})



btnEgale.addEventListener('click', ()=> {
    console.log(nb1);
    console.log(op);
    console.log(nb2);
    switch (op) {
        case (op ="+"):
            console.log(`${nb1+nb2}`);
            champAffich.innerHTML= nb1+nb2
            break;
        case (op ="-"):
            console.log(`${nb1-nb2}`);
            // champAffich.innerHTML= nb1+nb2
            break;
        case (op ="*"):
            console.log(`${nb1*nb2}`);
            // champAffich.innerHTML= nb1+nb2
            break;
    
        default:
            break;
    }
})
