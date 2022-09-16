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

    if (defResponse.title === "No Definitions Found") {
      randomWord();
    }

    def = defResponse[0].meanings[0].definitions[0].definition;
    console.log(def);
    nextWord();
  } catch {
    console.log(error);
  }
}

arrow.addEventListener("click", randomWord);

function nextWord() {
  DOMSelectors.front.innerHTML = "";
  DOMSelectors.front.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="word">${word}</h1>`
  );
  nextDef();
}

function nextDef() {
  DOMSelectors.back.innerHTML = "";
  DOMSelectors.back.insertAdjacentHTML(
    "afterbegin",
    ` <h2 class="def">
       ${def}
      </h2>`
  );
}

DOMSelectors.card.addEventListener("click", flipCard);
function flipCard() {
  DOMSelectors.container.classList.toggle("flipCard");
}
