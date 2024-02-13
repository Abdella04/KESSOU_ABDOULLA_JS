let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

for (let i = 0; i < jours.length; i++) {
    if (jours[i] === "Mercredi") {
        console.log("stop");
        continue;
    }
    console.log(jours[i]);
}

for (let i = 0; i < jours.length; i++) {
    console.log(jours[i]);
    if (jours[i] === "Jeudi") {
        console.log("stop");
        break;
    }
}

