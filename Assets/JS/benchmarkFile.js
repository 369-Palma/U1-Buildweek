/*----------------DOMANDE-----------------*/
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
/*-----TITOLO------*/

const random = () => {
  return Math.floor(Math.random() * 10);
};
titolo = () => {
  const newTitle = document.createElement("h1");
  newTitle.innerHTML = questions[random].question;
  document.getElementById("titoloBenchmark").appendChild(newTitle);
};

/*----------ARRAY DI RISPOSTE CORRETTE E NON CORRETTE-----------*/

let risposteIncorrette = [];
let risposteCorrette = [];

const incorrette = (array) => {
  for (let i = 0; i < array.length; i++) {
    risposteIncorrette.push(questions[i].incorrect_answers);
  }
  return risposteIncorrette;
};
console.log(incorrette(questions));

const corrette = (array) => {
  for (let i = 0; i < array.length; i++) {
    risposteCorrette.push(questions[i].correct_answer);
  }
  return risposteCorrette;
};
console.log(corrette(questions));

/*----------------CAST DEI BOTTONI-----------------------------*/

risposte = () => {
  for (i = 0; i < 3; i++) {
    const newButton = document.createElement("button");

    newButton.id = "bottone" + i;
    newButton.classList.add("bottone");
    newButton.onmouseover = aggiungiClasseSelected;
    newButton.onmouseout = aggiungiClasseSelected;
    document.getElementById("bottoni").appendChild(newButton);
    newButton.innerHTML = questions[random()].incorrect_answers[i];
  }

  const newButton = document.createElement("button");

  newButton.id = "bottone3";
  newButton.classList.add("bottone");
  newButton.onmouseover = aggiungiClasseSelected;
  newButton.onmouseout = aggiungiClasseSelected;
  newButton.innerHTML = questions[random()].correct_answer;
  document.getElementById("bottoni").appendChild(newButton);
};
/*-------------------TOGGLE DEI TASTI---------------------------------*/
const aggiungiClasseSelected = (event) => {
  const elementoCliccato = event.target;

  elementoCliccato.classList.toggle("selected");
};

/*-------WINDOW ONLOAD----*/

window.onload = () => {
  risposte();

  titolo();
};

// // ************** CODICE PER COLLEGARE CON L'ALTRA PAGINA VARIABILI DA CAMBIARE ***************

// const click_body = document.querySelector("body")

// click_body.addEventListener("click", (event) => {

//   // ************** CODICE PER LA PAGINA CHE PUSHA I DATI ***************
//   const correttePusha = 9
//   const svagliattePusha = 1

//   let urlP = new URLSearchParams()
//   urlP.append("correct", correttePusha)
//   urlP.append("wrong", svagliattePusha)

//   // metter i datti nel url
//   let link = "ResultsPage.html?" + urlP.toString()
//   location.href = link

//   // apre la nuova pagina

//   window.open(link)

// })
