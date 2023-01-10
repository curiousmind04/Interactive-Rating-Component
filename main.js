var rating1 = document.querySelector(".rating1");
var rating2 = document.querySelector(".rating2");
var rating3 = document.querySelector(".rating3");
var rating4 = document.querySelector(".rating4");
var rating5 = document.querySelector(".rating5");
var button = document.querySelector(".button button");
var container = document.querySelector(".container");
var rated = document.querySelector(".container2");
var selectedrating = document.querySelector(".selected-rating");
let number = "";

rating1.addEventListener("click", function () {
  rating1.classList.add("chosen");
  rating2.classList.remove("chosen");
  rating3.classList.remove("chosen");
  rating4.classList.remove("chosen");
  rating5.classList.remove("chosen");
  number = "1";
  button.style.pointerEvents = "auto";
});
rating2.addEventListener("click", function () {
  rating2.classList.add("chosen");
  rating1.classList.remove("chosen");
  rating3.classList.remove("chosen");
  rating4.classList.remove("chosen");
  rating5.classList.remove("chosen");
  number = "2";
  button.style.pointerEvents = "auto";
});
rating3.addEventListener("click", function () {
  rating3.classList.add("chosen");
  rating1.classList.remove("chosen");
  rating2.classList.remove("chosen");
  rating4.classList.remove("chosen");
  rating5.classList.remove("chosen");
  number = "3";
  button.style.pointerEvents = "auto";
});
rating4.addEventListener("click", function () {
  rating4.classList.add("chosen");
  rating1.classList.remove("chosen");
  rating2.classList.remove("chosen");
  rating3.classList.remove("chosen");
  rating5.classList.remove("chosen");
  number = "4";
  button.style.pointerEvents = "auto";
});
rating5.addEventListener("click", function () {
  rating5.classList.add("chosen");
  rating1.classList.remove("chosen");
  rating2.classList.remove("chosen");
  rating3.classList.remove("chosen");
  rating4.classList.remove("chosen");
  number = "5";
  button.style.pointerEvents = "auto";
});

button.addEventListener("click", function () {
  container.style.display = "none";
  rated.style.display = "block";
  selectedrating.innerHTML = number;
});
