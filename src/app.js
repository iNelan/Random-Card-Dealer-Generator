/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".card");
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let posicion = Math.floor(Math.random() * numbers.length);
  let cardNumber = document.querySelector(".number");
  cardNumber.innerHTML = numbers[posicion];

  let icons = ["♦", "♥", "♠", "♣"];
  let indexicon = Math.floor(Math.random() * icons.length);
  let cardicontop = document.querySelector(".top-icon");
  let cardiconbottom = document.querySelector(".bottom-icon");
  cardicontop.innerHTML = icons[indexicon];
  cardiconbottom.innerHTML = icons[indexicon];

  icons[indexicon] === "♥" || icons[indexicon] === "♦"
    ? (cardicontop.style.color = "red")
    : (cardicontop.style.color = "black");

  icons[indexicon] === "♥" || icons[indexicon] === "♦"
    ? (cardiconbottom.style.color = "red")
    : "";

  //  condicion ? true : false

  console.log(numbers);
};
