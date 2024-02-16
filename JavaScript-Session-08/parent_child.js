//part 4


// console.log(document.querySelector(".a").value)
// console.log(document.querySelector(".b").value)
// let a= Number(document.querySelector(".a").value)
// let b= Number(document.querySelector(".b").value)
// resultat =a+b
// console.log(resultat)
// document.querySelector(".resultat").value=resultat
document.querySelector(".btnn").addEventListener("click", () => {
    let a = Number(document.querySelector(".a").value);
    let b = Number(document.querySelector(".b").value);
    let resultat = a + b;
    document.querySelector(".resultat").value = resultat;
    console.log("Value of a:", a);
    console.log("Value of b:", b);
    console.log("Result:", resultat);
    if (resultat > 10) {
        document.querySelector(".resultat").style.backgroundColor = "red"
    }
    else if (resultat < 10) {
        document.querySelector(".resultat").style.backgroundColor = "green"
    }
})
////////////////////////////////////////////
document.querySelector(".resett").addEventListener("click", () => {
    document.querySelector(".a").value=""
    document.querySelector(".b").value=""
    document.querySelector(".resultat").value=""
})

// console.log(c)
// console.log(document.body)






    const parent =document.querySelector(".section-1")
    const enfant =document.createElement("h1")
    enfant.innerHTML="learn jS"
    enfant.style.backgroundColor="aqua"
    const nom=document.createElement("h2")
    nom.innerHTML="Abdoullah Kessou"
    nom.style.color="red"
    


document.querySelector(".btnn2").addEventListener('click', function() {
    parent.append(enfant) 
  
    parent.append(nom)
})


document.querySelector(".btnn3").addEventListener('click', function() {
document.querySelector(".resultat").remove()

})
