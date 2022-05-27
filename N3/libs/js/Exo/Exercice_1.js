let maChaine = "Toto mange une cote de bœuf";

const changeString = (chaine) => {
  chaine = chaine.toUpperCase();

  let stringToChange = chaine.split("");

  stringToChange.forEach((element, i) => {
    if (i % 2 === 0) {
      stringToChange[i] = element.toLowerCase();
    }
  });
  document.write("<br/>" + stringToChange.join("") + "<br/>");
};

changeString(maChaine);

changeString(prompt("votre chaine?"));
for( i=0; i<5; i++){
    changeString(prompt("votrechaineN°"+(i+1)));
    
}



const humain={
    couleur_cheveux: "Bleu",
    couleur_yeux: "noir",
    taille: 187,
    age: 34,
    sex: "M",
    hobbies:["pêche","JS","Boxe"],
    img: "https://c.tenor.com/ysUnD6xjPZQAAAAC/kamoulox.gif",
    nom: "Toto"
};

document.write(`<div>
<img src=${humain.img} />
<div>
<h1>${humain.nom}</h1>
<span>${humain.sex}</span><br/>
<span>${humain.age} ans</span><br/>
<span>${humain.hobbies.join(' - ')}</span><br/>
<span>${humain.taille} cm</span>
</div>
</div>`);
