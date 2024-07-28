var randomnumber1 = Math.floor(Math.random()*6)+ 1 ;
var randomimage1 = "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);


var randomnumber2 = Math.floor(Math.random()*6) + 1 ;
var randomimage = "images/dice" + randomnumber2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src",randomimage);
