
//let username

//document.getElementById("mysubmit").onclick = function(){
// username = document.getElementById("text").value;
// document.getElementById("myh1").textContent = `Hello ${username}`
//}

//let age = window.prompt("How old are you");
//age = Number(age);
//ge +=1;
//console.log(age, typeof age);

const PI = 3.14159
let radius;
let circumfrence;


document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("text").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumfrence + "cm";



}