let premiere= 4;
let deuxieme= 18;
let temp=0;

console.log(">>>>>>>>>>>>> AVANT >>>>>>>>>")

console.log("premiere=",premiere);
console.log("deuxieme=",deuxieme);
console.log("temp=", temp);

temp= premiere;
premiere= deuxieme;
deuxieme= temp;

console.log(">>>>>>>>>>>>> AVANT >>>>>>>>>")

console.log("premiere=",premiere);
console.log("deuxieme=",deuxieme);
console.log("temp=", temp);

console.log("<<<<<<<<<<<  TABLEAU <<<<<<<<");

let numbers= [22,33,65,110,152,656456];

console.log(numbers[0]);
console.log(numbers[numbers.length -1]);

numbers.unshift(1);
numbers.push(007);

console.log(numbers[0]);
console.log(numbers[numbers.length -1]);

for(let i=0;i<numbers.length;i=i+1){
    const élément=numbers[i];
    document.write(` <br/>itération, n° ${i} donne élément ${élément} <br/>`);
    
}

let i=0;

while(i<numbers.length){
    const élément=numbers[i]
    document.write(`<br/> while itération N°${i} => value = ${élément} <br/>`);
    i++;
}

let uneValeur= 10;

let indicateur=0;

let check=true;

while(check){
    alert(`on est pas loin` + indicateur);
    if(indicateur>=uneValeur){
        check= false;
        alert(`Nous y sommes!`);
    }
    indicateur++;
}



let number=0;

const peoplenumber=() => {
    number=parseInt(prompt("combien de personnes?"))
    while(isNaN(number)|| number<1){
        alert("une valeur numérique positive est requise!")
        number=parseInt(prompt("cb de personne ?"))

    }
    return number;

    const testNumberForCovid=()=>{
        let nbPeople=peopleNumber();
    
        switch (true) {
            case number<=6:
                alert("c'est ok");
                break;
                case number>6:
                    alert("c'est pas bon 135€");
                break;
            default:
                console.log("error");
                break;
        }
    }
    
    testNumberForCovid();
     


}














