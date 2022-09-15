"use strict";
// Dictionary for kids to learn new vocabulary

const DOMSelectors = {
  card: document.getElementById("card"),
  container: document.getElementById("container"),
  next: document.getElementById("next"),
  arrow: document.getElementById("arrow"),
  front: document.getElementById("front"),
  back: document.getElementById("back"),
};

DOMSelectors.card.addEventListener("click", flipCard);

function flipCard() {
  DOMSelectors.container.classList.toggle("flipCard");
}

const randomAPI = "https://random-word-api.herokuapp.com/word";

async function randomWord() {
  try {
    const response = await fetch(randomAPI).then((api) => api.json());
    console.log(response[0]);
  } catch {
    console.log(error);
  }
}
randomWord();

arrow.addEventListener("click", nextWord);

function nextWord() {
  DOMSelectors.front.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="word">Acquiesce</h1>`
  );
  nextDef();
}

function nextDef() {
  DOMSelectors.back.insertAdjacentHTML(
    "afterbegin",
    ` <h2 class="def">
        Accept something reluctantly but without protest.
      </h2>`
  );
}
