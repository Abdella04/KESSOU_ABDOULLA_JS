let jour = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

// First loop
for (let j = 0; j <= (jour.length - 1); j++) {
    console.log(jour[j]);
    break;
}

// Second loop
for(let jr in jour){
    console.log(jour[jr]);
}

// Third loop
for(let jour of jour){
    console.log(jour);
}
