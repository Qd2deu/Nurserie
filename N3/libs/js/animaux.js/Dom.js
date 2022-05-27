
// les fonctions en javascript

function somme(x , y){
    return x+y;
}

document.write(somme(999,888));
document.write(`<br>`);

function soustraction(x , y){
    return x-y;
}
document.write(soustraction(70,57));
document.write(`<br>`);

function multiplication(x , y){
    return x*y;
}
document.write(multiplication(74,84));
document.write(`<br>`);

function division(x , y){
    return x/y;

}
document.write(division(54,65));
document.write(`<br>`);

let paragraphe = document.querySelector("#info");

paragraphe.innerText = "On change le texte dans notre paragraphe";

let formulaire = document.querySelector("#form");

console.log(formulaire);

formulaire.addEventListener("submit", onSubmit)

function onSubmit(event){
    event.preventDefault();
    paragraphe.innerText = "le formulaire à bien été envoyer";

}