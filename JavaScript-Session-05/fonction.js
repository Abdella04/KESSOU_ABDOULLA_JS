let somme = function(a,b){
    return a + b
}

let sm = somme(5,9)

console.log(sm)

// les function flechess(arrow function)
let a= function(){
    return console.log("hello akram!!")
};

let great = () => {
    return console.log("hello mohamed!!")
};
// or 
let great2 = () => console.log("hello mohamed!!")

let nomcomplet = (nom,prenom) => {

    let fullname = nom + " " + prenom

    return fullname
}

console.log(nomcomplet("Kessou","Abdoullah"))

great2()

// les exepressions lambdas
// map(il retourn un nouveau tableau)

let jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","demanche"];

// jours.map( function(item){

//     return console.log(item)
// })

jours.map((item) => {

    return console.log(item)
})

jours.map((item) => {
    
    return console.log(item)
})
console.log(jours)



// const stagiaires = [
//   { nom: "abdellah", prenom: "zakaria", age: 19 },
//   { nom: "ahmed", prenom: "aaa", age: 19 },
//   { nom: "hammouda", prenom: "bbb", age: 19 }
// ];

// const nomsEtPrenoms = stagiaires.map(stagiaire => ({ nom: stagiaire.nom, prenom: stagiaire.prenom }));

// console.log(nomsEtPrenoms);

const stagiaires = [
    { nom: "abdellah", prenom: "zakaria", age: 19 },
    { nom: "ahmed", prenom: "aaa", age: 19 },
    { nom: "hammouda", prenom: "bbb", age: 19 }
  ];
  
  const nomsEtPrenoms = stagiaires.map(stagiaire => ({ nom: stagiaire.nom, age: stagiaire.age }));
  
  console.log(nomsEtPrenoms);
