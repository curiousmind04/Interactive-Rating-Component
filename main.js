const ratings = document.querySelectorAll(".rating");
const button = document.querySelector(".button button");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const selectedRating = document.querySelector(".selected-rating");

ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    selectedRating.innerHTML = rating.innerHTML;
    button.style.pointerEvents = "auto";
  });
});

button.addEventListener("click", function () {
  container.style.display = "none";
  container2.style.display = "block";
});
