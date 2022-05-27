let animaux = [
  {
    nom: "Chat",
    longevite: "10 a 20",
    image:
      "https://static5.depositphotos.com/1000270/486/i/450/depositphotos_4869272-stock-photo-bengal-cat-in-light-brown.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Chat",
    description: "Le petit chat",
    aliments: ["croquettes", "sardines"],
  },
  {
    nom: "Rat",
    longevite: "2 a 3 ",
    image:
      "https://static.nationalgeographic.fr/files/styles/image_3200/public/01-rat-friends-nationalgeographic_1162144.jpg?w=1900&h=1267",
    wiki: "https://fr.wikipedia.org/wiki/Rat#:~:text=Les%20rats%20sont%20le%20plus,le%20rat%20domestique%20en%20%C3%A9levage.",
    description:
      "Le mot « rat » est un nom vernaculaire ambigu qui peut désigner, en français, des centaines d'espèces différentes dans le monde de mammifères rongeurs omnivores, dont la queue est nue, les dents tranchantes et le museau pointu.",
    aliments: ["Viandes", "Cereales", "Fruits"],
  },
  {
    nom: "Tortue",
    longevite: "60 a 80",
    image:
      "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2021-09/tortue-grec-063813.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Tortue",
    description:
      "Les Tortues (Testudines) ou Chéloniens forment un ordre de reptiles dont les caractéristiques sont un crâne sans fosses temporales et la présence d'une carapace. Il existe actuellement (décembre 2019) 343 espèces recensées possédant des caractéristiques diverses, mais toutes se distinguent des autres reptiles par une carapace qui est constituée d'un plastron au niveau du ventre et d'une dossière sur le dessus, reliés par deux ponts sur les côtés du corps. On les sépare traditionnellement en trois groupes : les tortues terrestres (environ 70 espèces), les tortues aquatiques, ou tortues dulçaquicoles (environ 260 espèces), et les tortues marines (7 espèces).",
    aliments: ["Feuilles", "Fleurs", "Bourgeons"],
  },
  {
    nom: "Chien",
    longevite: "10 a 13",
    image:
      "https://www.santevet.com/upload/admin/images/article/chien2_2/chien_dangereux/chiens%20dangereux.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Chien",
    description:
      "Le Chien (Canis lupus familiaris) est la sous-espèce domestique de Canis lupus (Loup gris), un mammifère de la famille des Canidés (Canidae), laquelle comprend également le dingo, chien domestique retourné à l'état sauvage.",
    aliments: ["croquettes", "poulet"],
  },
  {
    nom: "Dauphin",
    longevite: "40 a 50",
    image: "https://www.lamanchelibre.fr/photos/1200/937266/",
    wiki: "https://fr.wikipedia.org/wiki/Dauphin",
    description:
      "Dauphin est un nom vernaculaire ambigu désignant en français certains mammifères marins et fluviaux appartenant à l'ordre des cétacés.",
    aliments: ["maquereaux", "sprats", "merlans"],
  },
  {
    nom: "Lama",
    longevite: "20",
    image:
      "https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2021.2F12.2F20.2Fbe79dfd1-2d69-4fab-86be-dd401e87c5fc.2Ejpeg/1200x1200/quality/80/crop-from/center/focus-point/762%2C732/tout-savoir-sur-le-lama.jpeg",
    wiki: "https://fr.wikipedia.org/wiki/Lama_(animal)",
    description:
      "Le lama blanc (Lama glama), ou plus simplement lama, est une espèce de Camélidés d'Amérique du Sud, mais ses origines lointaines ont été retracées jusqu'en Amérique du Nord, d'où il a disparu à la période de l'Éocène.",
    aliments: ["Ronces", "Orties"],
  },
];

// animaux.forEach(function (e){

//    document.write(e.nom);
//    document.write(e.longevite);

//   document.write(`
//    <a href="${e.wiki}">
//   <img src="${e.image}" height="50px" width= "50px" >
//   </a>
//   `);

//    document.write(`<br>`);

// });

document.write("<table border=`1`>");
document.write(`<tr>
    
        <th> Nom </th>
        <th> Longévité </th>
        <th> Image </th>
        <th> Wiki </th>
        <th> Description </th>
        <th> Aliments </th>

        </tr>  
   `);

animaux.forEach(function (element) {
  document.write("<tr>");
  document.write(`<td>${element.nom}</td>`);
  document.write(`<td>${element.longevite}</td>`);
  document.write(
    `<td> <img src="${element.image}" height="80px" width="80px"</a> </td>`
  );
  document.write(
    `<td> <a href="${element.wiki}" target="_blank"> Liens Wiki </a> </td>"`
  );
  document.write(`<td>${element.description} </td>
  
  `);

  document.write(`<td> <ul>`);

  element.aliments.forEach(function (aliments) {
    document.write(`<li>${aliments} <li/>`);
  });

  document.write("</td> </ul>");

  document.write("</tr>");
});

document.write("</table");

let age = 40;
if (age == 12) {
  console.log("près ados");
} 
else if (age < 12) {
  console.log("enfant");
} 
else if (age > 13 && age <18) {
  console.log("ados");
} 
else if (age >= 18 && age< 99) {
  console.log("Majeur");
} 
else if (age > 99) {
  console.log("c'est bientôt la fin !");
} 
else {
  console.log("invalide");
}

let ageClub =6;

if (ageClub ==6 || ageClub ==7){
   document.write(`<h1> Poussin </h1>`)
   } 
   else if (ageClub ==8 || ageClub  ==9){
   document.write(`<h1> Pupille </h1>`)
   }
   else if (ageClub == 10 ||ageClub == 11){
   document.write(`<h1> Minime </h1>`)
   }
   else if (ageClub >12 ){
   document.write(`<h1> Cadet </h1>`)    
   }





   