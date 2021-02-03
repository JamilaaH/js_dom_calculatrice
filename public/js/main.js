import {chiffres,operateur,btnEgale,btnClear,champAffich,nb1,nb2,op} from "./operation.js"

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
        // console.log(champAffich.innerHTML, champAffich.innerHTML.length);
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
