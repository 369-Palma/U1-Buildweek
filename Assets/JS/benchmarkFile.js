// window.addEventListener("load", (event) => {
//   return alert("asdffafadssda");
// });

// const buttonPress = document.querySelector("#benchmarkBottone");

// buttonPress.addEventListener("click", (event) => {
//   buttonPress.toggle("selected");
// });
// const padreDomande = document.getElementById("bottoni");
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
//

// let sbagliate = 0;
// let giuste = 0;

// function filtro(array) {
//   questions.filter(answer);
//   risposte = (array) => {
//     return array.map((e) => e.correct_answer);
//   };
// }
// console.log(filtro(questions));

//faccio array con dentro stringhe di risposte corrette + risposte incorrette x

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

// faccio una funzione che pushi le stringhe contenute in correct ed incorrect answer dentro a risposte
// function pushRisposte(questions) {
//   //let risposte = ["risposta4", "risposta 1", "risposta2", "risposta 3"];
//   //shuffle

//   for (let i = 0; i < 1; i++) {
//     const risposteCorrette = questions[0].correct_answer + " ";
//     const risposteNonCorrette = questions[0].incorrect_answers + " ";
//     const sommaRisposte = risposteCorrette + risposteNonCorrette;
//     risposte.push(sommaRisposte);
//   }

//   console.log(risposte);
// }
// pushRisposte(questions);

// faccio funzione che metta le risposte dentro i button

// controllo che il bottone cliccato abbia una stringa contenuta in correct answer
// else incorrect answer
// a seconda del risultato, aumento il contatore delle risposte corrette o incorrette

/*---BOTTONI---*/
// aggiungiClasseSelected.addEventListener("click", (event) => {
//   const elementoCliccato = event.target;
//   elementoCliccato.classList.toggle("selected");
// });

const aggiungiClasseSelected = (event) => {
  const elementoCliccato = event.target;
  elementoCliccato.classList.toggle("selected");
};
risposte = () => {
  for (i = 0; i < 3; i++) {
    const newButton = document.createElement("button");
    // newButton.classList.add("bottoneSbagliato");
    newButton.id = "bottone" + i;
    newButton.classList.add("bottone");
    newButton.onclick = aggiungiClasseSelected;
    document.getElementById("bottoni").appendChild(newButton);
    newButton.innerHTML = questions[0].incorrect_answers[i];
  }

  const newButton = document.createElement("button");
  // newButton.classList.add("bottoneGiusto");
  newButton.id = "bottone3";
  newButton.classList.add("bottone");
  newButton.onclick = aggiungiClasseSelected;
  newButton.innerHTML = questions[0].correct_answer;
  document.getElementById("bottoni").appendChild(newButton);
};

// const questionTemplate = (questions) => `
// <button id="benchmarkBottone">
// ${questions.incorrect_answers}
// </button>
// `;

// risposte = () => {
//   for (let i = 0; i < 4; i++) {
//     const newButton = document.createElement("button");
//     newButton.classList.add("bottone");
//     document.getElementById("bottoni").appendChild(newButton);
//     newButton.innerHTML = questions[0].incorrect_answers[i];
//   }
// };

/*-----TITOLO------*/
titolo = () => {
  const newTitle = document.createElement("h1");
  newTitle.innerHTML = questions[0].question;
  document.getElementById("titoloBenchmark").appendChild(newTitle);
};
/*-------QUESTION----*/

window.onload = () => {
  risposte();

  titolo();
};
