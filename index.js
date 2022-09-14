"use strict";
// Dictionary for kids to learn new vocabulary

const DOMSelectors = {
  card: document.getElementById("card"),
  container: document.getElementById("container"),
  next: document.getElementById("next"),
  arrow: document.getElementById("arrow"),
  front: document.getElementById("front"),
};

DOMSelectors.card.addEventListener("click", flipCard);

function flipCard() {
  DOMSelectors.container.classList.toggle("flipCard");
}

const word = [
  {
    word: "candy",
    def: "a sweet food made with sugar or other sweeteners, typically formed in small, shaped pieces and flavored with chocolate, fruit, or nuts",
  },
  {
    word: "day",
    def: "a period of twenty-four hours as a unit of time, reckoned from one midnight to the next, corresponding to a rotation of the earth on its axis.",
  },
];

arrow.addEventListener("click", nextWord);

function nextWord() {
  DOMSelectors.front.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="word">Acquiesce</h1>`
  );
}
