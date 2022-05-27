//("Hello word !");
let age = 31;
let nom = "Dedeurwaerder";
let prenom = "Quentin";

console.log(
  "Bonjour ! Je suis " + nom + " " + prenom + ", j'ai " + age + " ans !"
);
console.log("Bonjour ! Je suis", nom, " ", prenom, ", j'ai ", age, " ans !");
console.log(`Bonjour ! Je suis ${nom} ${prenom} , j'ai ${age} ans !`);
// Bonjour ! Je suis Dedeurwaerder Quentin, j'ai 31ans !$
const nomComplet = "Julien La Garde";

console.log(prenom.substring(0, 4));

console.log(nomComplet.split(";"));

let csv1 = "Joh;,Doe;120 jefferson st.;Riverside; NJ; 08075";
console.log(csv1.split(";"));

let csv2 = "Jack;McGinnis;220 hobo Av.;Phila;PA;09119";
console.log(csv2.split(";"));

let phrase = "Bonjour !  Je suis Dupond Toto, j'ai  99 ans !";
console.log(phrase.split(""));

let monTableau = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(monTableau[0]);

let Tableau = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

console.log(Tableau[0]);
console.log(Tableau[1]);
console.log(Tableau[2]);
console.log(Tableau[3]);
console.log(Tableau[4]);
console.log(Tableau[5]);
console.log(Tableau[6]);
console.log(Tableau[7]);
console.log(Tableau[8]);
console.log(Tableau[9]);

const personne = {
  prenom: "Julien",
  nom: "La garde",
  age: "30",
  passions: ["foot", "boxe", "natation"],
  adresse: {
    rue: "rue nationale",
    ville: "Lille",
    pays: "France",
    email: "julie@example.com",
  },
};

console.log(`Bonjour je suis ${personne.nom} ${personne.prenom}`);

console.log(`j'habite a ${personne.adresse.ville}`);

console.log(personne.passions[2]);

personne.email = "nonemail@gmail.fr";

console.log(personne.email);
personne.email = "Quentin";

console.log(personne);

let personnes = [
  {
    prenom: "Julien",
    nom: "La garde",
    age: "30",
    passions: ["foot", "boxe", "natation"],
    adresse: { rue: "rue nationale", ville: "Lille", pays: "France" },

    email: "julie@example.com",
  },
  {
    prenom: "Jean",
    nom: "Roger",
    age: "58",
    passions: ["Natation", "Tennis", "Tricot"],
    adresse: { rue: "rue du pont", ville: "Bouvines", pays: "France" },

    email: "julie@example.com",
  },
];

console.log(personnes);

console.log(personnes[1].age);

console.log(personnes[1].passions[2]);

personnes[1].passions[2] = "Cobol";

console.log(personnes)[1].passions[2];

let nombres = [1, 2, 35, 99, 105];

// ici on utilise un ForEach avec une function anonyme
nombres.forEach(function (element) {
  document.write(element + "<br>");
});

nombres.forEach((element) => {
  document.write(element + " ");
});

for (let i = nombres.length; i > 0; i--) {
  document.write(nombres[i] + " ");

  console.log(nombres.length);
}

//parcourir le tableau du début à la fin avec une boucle for 
document.write("<br>")
for (let i = 0 ; i < nombres.length ; i++){

  document.write(nombres[i] + " ");


}