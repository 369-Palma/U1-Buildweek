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

titolo = () => {
  const newTitle = document.createElement("h1");
  newTitle.innerHTML = questions[0].question;
  document.getElementById("titoloBenchmark").appendChild(newTitle);
};

/*----------ARRAY DI RISPOSTE CORRETTE E NON CORRETTE-----------*/

let risposteIncorrette = [];
let risposteCorrette = [];
let ArrayDomande = [];
const Answers = (array) => {
  array.map((element) => {
    risposteIncorrette.push(questions[element].incorrect_answers);
    risposteCorrette.push(questions[element].correct_answer);
    ArrayDomande = risposteIncorrette.concat(risposteCorrette);
  });
  return ArrayDomande;
};
console.log(Answers(questions));

/* const corrette = (array) => {
  for (let i = 0; i < array.length; i++) {}
  return risposteCorrette;
};
console.log(corrette(questions));
let TutteLeRisposte = risposteIncorrette.concat(risposteCorrette);
const InsiemediRisposte = (array) => {
  for (let i = 0; i < array.length; i++) {
    let;
  }
};

console.log(onlyTheAnswers(questions)); */
/* const SoloLeRisposte = [];
console.log(onlyTheAnswers(questions)); */

/*----------------CAST DEI BOTTONI-----------------------------*/
risposte = () => {
  for (i = 0; i < 3; i++) {
    const newButton = document.createElement("button");

    newButton.id = "bottone" + i;
    newButton.classList.add("bottone");
    newButton.onclick = aggiungiClasseSelected;
    document.getElementById("bottoni").appendChild(newButton);
    newButton.innerHTML = questions[0].incorrect_answers[i];
  }

  const newButton = document.createElement("button");

  newButton.id = "bottone3";
  newButton.classList.add("bottone");
  newButton.onclick = aggiungiClasseSelected;
  newButton.innerHTML = questions[0].correct_answer;
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
