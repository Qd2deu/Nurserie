let nombres = [1, 2, 35, 99, 105];

// ici on utilise un forEach avec une function anonyme
nombres.forEach(function (element) {

  document.write(element + "<br>");

} ) ;


// ici on utilise un forEach avec une function fléchée
nombres.forEach( (element) => {

  document.write(element + " ");

} ) ;


// on parcours le tableau de la fin jusqu'au début
for (let i = nombres.length-1 ;  i >= 0 ; i--){

    document.write( nombres[i] + " " );

}

//parcourir le tableau du début à la fin avec une boucle for
document.write("<br>");
for (let i = 0 ; i < nombres.length ; i++){

    document.write( nombres[i] + " " );


}

document.write("<br>");


let nombreRechercher = 0;
let indice = 0;

while(indice < nombres.length && nombreRechercher !== 99 ){

nombreRechercher = nombres[indice];
document.write(nombreRechercher + "<br>");
indice++;


}

let flag = true;
while (flag){
    flag = false;
    
    document.write(" faux c'est une boucle fini");

}

// tant qu' une condition est vrai alors on fait un
// Traitement et fin du tant 

let age = 12
if (x == 12){
console.log("près ados")}