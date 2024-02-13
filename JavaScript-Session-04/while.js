let n = 10;
while (n >= 0) {
    console.log(n);
    n -= 1;
}

let m;

let txtJours = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function myFunction(value, index, array) {
    txtJours += "" + value;
}

txtJours.forEach(myFunction);
