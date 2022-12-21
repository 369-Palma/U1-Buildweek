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

// const random = () => {
//   return Math.floor(Math.random() * 10);
// };

titolo = (posizione, questionsJson) => {
  document.getElementById("titoloBenchmark").innerHTML = "";
  const newTitle = document.createElement("h1");
  newTitle.innerHTML = questionsJson[posizione].question;
  document.getElementById("titoloBenchmark").appendChild(newTitle);
};

/*----------ARRAY DI RISPOSTE CORRETTE E NON CORRETTE-----------*/

// let risposteIncorrette = [];
// let risposteCorrette = [];

// const incorrette = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     risposteIncorrette.push(questions[i].incorrect_answers);
//   }
//   return risposteIncorrette;
// };
// console.log(incorrette(questions));

// const corrette = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     risposteCorrette.push(questions[i].correct_answer);
//   }
//   return risposteCorrette;
// };
// console.log(corrette(questions));
let risposteIncorrette = [];
let risposteCorrette = [];

const incorrette = (question) => {
  risposteIncorrette.push(question);
};

const corrette = (question) => {
  risposteCorrette.push(question);
};

/*----------------CAST DEI BOTTONI-----------------------------*/
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

risposte = (posizione, questionsJson) => {
  //inseriti parametri (obbligatori, in questo modo quando chiamo "counterIncrease", posso dirgli quale risposta caricare)
  let possibleAnswers = []; //array che conterrà i bottoni
  document.getElementById("bottoni").innerHTML = ""; //pulizia div "bottoni"
  for (i = 0; i < questionsJson[posizione].incorrect_answers.length; i++) {
    //lunghezza dinamica (fix true/false issues)

    const newButton = document.createElement("button");
    newButton.id = "bottone" + i;
    newButton.classList.add("bottone");
    newButton.onmouseover = aggiungiClasseSelected;
    newButton.onmouseout = aggiungiClasseSelected;
    if (posizione < questionsJson.length - 1) {
      // se funzione parte a caso (bug) fai () => {nomeFunzione}
      newButton.onclick = () => {
        // se clicco questop bottone vuol dire che la risposta è sbagliata -- pusho in risposte incorrette
        incorrette(questionsJson[posizione]);
        counterIncrease();
      };
    } else {
      newButton.onclick = () => {
        incorrette(questionsJson[posizione]);
        lastQuestion();
      };
    }
    // document.getElementById("bottoni").appendChild(newButton);// si fa alla fine con un ciclo forEach
    newButton.innerHTML = questionsJson[posizione].incorrect_answers[i]; //resa dinamica con parametri in ingresso
    possibleAnswers.push(newButton); //push dell'array
  }

  const newButton = document.createElement("button");

  newButton.id = "bottone3";
  newButton.classList.add("bottone");
  newButton.onmouseover = aggiungiClasseSelected;
  newButton.onmouseout = aggiungiClasseSelected;
  if (posizione < questionsJson.length - 1) {
    newButton.onclick = () => {
      corrette(questionsJson[posizione]); //se clicco questo bottone vuol dire che la risposta è giusta-- pusho in risposte corrette
      counterIncrease();
    };
  } else {
    newButton.onclick = () => {
      corrette(questionsJson[posizione]);
      lastQuestion();
    };
  }
  newButton.innerHTML = questionsJson[posizione].correct_answer;
  // document.getElementById("bottoni").appendChild(newButton);//vedi su
  possibleAnswers.push(newButton);

  shuffle(possibleAnswers); // richiamo la funzione per mischiare l'array (copiata da internet)
  possibleAnswers.forEach((element) => {
    // per ogni elemento lo aggiungo al div bottoni (dopo averli mischiati)
    document.getElementById("bottoni").appendChild(element);
  });
};
/*-------------------TOGGLE DEI TASTI---------------------------------*/
const aggiungiClasseSelected = (event) => {
  const elementoCliccato = event.target;

  elementoCliccato.classList.toggle("selected");
};
let counter = 0;

const counterIncrease = () => {
  counter++; //messo sopra counter++ cosi incrementa il valore prima di fare tutto
  document.getElementById("domanda").innerHTML = "QUESTION " + (counter + 1);
  titolo(counter, questions);
  risposte(counter, questions); //richiamo funzione inserendo i parametri delle domande e posizione aggiornata
  // document.addEventListener(`click`, risposte());//useless
};

const lastQuestion = () => {
  gotoResults();
};

/*-------WINDOW ONLOAD----*/

window.onload = () => {
  risposte(counter, questions);
  // inserisco parametri
  document.getElementById("domanda").innerHTML = "QUESTION " + (counter + 1);
  document.getElementById("totaleDomande").innerHTML = "/" + questions.length;

  titolo(counter, questions); //inserisco parametri
};

// // ************** CODICE PER COLLEGARE CON L'ALTRA PAGINA VARIABILI DA CAMBIARE ***************

// const click_body = document.querySelector("body")

// click_body.addEventListener("click", (event) => {

//   // ************** CODICE PER LA PAGINA CHE PUSHA I DATI ***************
function gotoResults() {
  const correttePusha = risposteCorrette.length;
  const sbagliatePusha = risposteIncorrette.length;

  let urlP = new URLSearchParams();
  urlP.append("correct", correttePusha);
  urlP.append("wrong", sbagliatePusha);

  // metter i datti nel url
  let link = "ResultsPage.html?" + urlP.toString();
  location.href = link;

  // apre la nuova pagina

  window.open(link);
}
