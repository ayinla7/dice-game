
document.querySelector("h1").classList.toggle("huge");


var p1 = Math.floor((Math.random() * 6) + 1);
var p2 = Math.floor((Math.random() * 6) + 1);

if(p1==1){
  document.querySelectorAll("div i")[0].classList.add("fa-dice-one");
}else if (p1==2) {
  document.querySelectorAll("div i")[0].classList.add("fa-dice-two");
}else if (p1==3) {
  document.querySelectorAll("div i")[0].classList.add("fa-dice-three");
}
else if (p1==4) {
  document.querySelectorAll("div i")[0].classList.add("fa-dice-four");
}
else if (p1==5) {
  document.querySelectorAll("div i")[0].classList.add("fa-dice-five");
}else{
  document.querySelectorAll("div i")[0].classList.add("fa-dice-six");
}

if(p2==1){
  document.querySelectorAll("div i")[1].classList.add("fa-dice-one");
}else if (p2==2) {
  document.querySelectorAll("div i")[1].classList.add("fa-dice-two");
}else if (p2==3) {
  document.querySelectorAll("div i")[1].classList.add("fa-dice-three");
}
else if (p2==4) {
  document.querySelectorAll("div i")[1].classList.add("fa-dice-four");
}
else if (p2==5) {
  document.querySelectorAll("div i")[1].classList.add("fa-dice-five");
}else{
  document.querySelectorAll("div i")[1].classList.add("fa-dice-six");
}


if (p2==p1){
  document.querySelector("h1").textContent = "It's a Tie!";
}else if(p2>p1){
 document.querySelector("h1").textContent = "Player 2 Wins!";
}else{
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
