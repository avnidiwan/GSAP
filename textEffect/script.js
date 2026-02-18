
var name1 = document.querySelector("#1");
var name2 = document.querySelector("#2");

var ad1 = name1.innerText;
var ad2 = name2.innerText;

animate=''; 

var splittedText = ad1.split('');

splittedText.forEach( (a,b,c) => {
    animate = animate + `<span>${a}</span>`;
})