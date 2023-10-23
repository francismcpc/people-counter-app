let welcomeEl = document.getElementById("welcome-el");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let myName = "Francis Macaspac";
let myGreeting = "Welcome back, ";
welcomeEl.innerText = myGreeting + myName;
welcomeEl.innerText += "👋";

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = " " + count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
