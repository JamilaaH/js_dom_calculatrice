import {chiffres,operateur,btnEgale,btnClear,champAffich} from "./operation.js"
let nb1
let nb2
let op
chiffres.forEach(el =>{
    el.addEventListener("click", ()=> {
        champAffich.innerHTML += el.innerText
        nb2 = champAffich.innerHTML
    })
})
operateur.forEach(el =>{
    el.addEventListener('click', () => {
        nb1 = nb2
        champAffich.innerHTML=""
        champAffich.innerHTML += el.innerText
        op = champAffich.innerHTML



    })
})

btnClear.addEventListener('click', ()=> {
    champAffich.innerHTML=""
})



btnEgale.addEventListener('click', ()=> {
    nb1 = parseInt(nb1);
    nb2 = parseInt(nb2.substr(1));
    switch (op) {
        case (op ="+"):
            console.log(`${nb1+nb2}`);
            champAffich.innerHTML= nb1+nb2
            break;
        case (op ="-"):
            console.log(`${nb1-nb2}`);
            champAffich.innerHTML= nb1-nb2
            break;
        case (op ="*"):
            console.log(`${nb1*nb2}`);
            champAffich.innerHTML= nb1*nb2
            break;
        case (op ="/"):
            console.log(`${nb1/nb2}`);
            champAffich.innerHTML= nb1/nb2
            break;
    
        default:
            break;
    }
})
