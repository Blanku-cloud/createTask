"use strict";

const DOMSelectors = {
  card: document.getElementById("card"),
  container: document.getElementById("container"),
  next: document.getElementById("next"),
};

DOMSelectors.card.addEventListener("click", flipCard);

function flipCard() {
  DOMSelectors.container.classList.toggle("flipCard");
}
