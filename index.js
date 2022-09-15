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

const randomAPI = "https://random-word-api.herokuapp.com/word";
let word = null;
let def = null;

window.addEventListener("load", randomWord);

async function randomWord() {
  try {
    const wordResponse = await fetch(randomAPI).then((api) => api.json());
    word = wordResponse[0];
    const defResponse = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    ).then((api) => api.json());
    const def = defResponse[0];
    const meaning = def.meanings;
    console.log(def);
    nextWord();
    nextDef();
  } catch {
    console.log(error);
  }
}

arrow.addEventListener("click", nextWord);

function nextWord() {
  DOMSelectors.front.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="word">${word}</h1>`
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

DOMSelectors.card.addEventListener("click", flipCard);

function flipCard() {
  DOMSelectors.container.classList.toggle("flipCard");
}
