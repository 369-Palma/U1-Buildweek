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

titolo = (posizione, domande) => {
  document.getElementById("titoloBenchmark").innerHTML = "";
  const newTitle = document.createElement("h1");
  newTitle.innerHTML = domande[posizione].question;
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

/*----------------CAST DEI BOTTONI-copiato da google----------------------------*/
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

const risposte = (posizione, domande) => {
  //>>> ************* timer ****************>>>
  // const timer = () => {
  //   // tempo attuale in numero con gettime + 60secs (1000 =1sec)
  //   let end = new Date().getTime() + 60000;
  //   // fa intervali di updates ogni secondo ... sotto }, 1000)
  //   let repeat = setInterval(function () {

  //     // Get today's date and time
  //     let now = new Date().getTime();

  //     // quanto tempo manca tra end e now, tempo attuale e il tempo attuale piu 6
  //     let tempoManca = end - now;

  //     // matematica di cambio secondi minuti
  //     let minutes = Math.floor((tempoManca % (1000 * 60 * 60)) / (1000 * 60));
  //     let seconds = Math.floor((tempoManca % (1000 * 60)) / 1000);

  //     // Output
  //     document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

  //     // se il timer è 0 cambia il tiemr a next qeustion
  //     if (tempoManca < 0) {
  //       clearInterval(repeat);
  //       document.getElementById("timer").innerHTML = "next question";

  //     }
  //   }, 1000);
  // }
  // timer()

  //<<< ************* timer ****************<<<

  //inseriti parametri (obbligatori, in questo modo quando chiamo "counterIncrease", posso dirgli quale risposta caricare)
  let possibleAnswers = []; //array che conterrà i bottoni

  document.getElementById("bottoni").innerHTML = ""; //pulizia div "bottoni"
  timer();
  for (i = 0; i < domande[posizione].incorrect_answers.length; i++) {
    //lunghezza dinamica (fix true/false issues)

    const newButton = document.createElement("button");
    newButton.id = "bottone" + i;
    newButton.classList.add("bottone");
    newButton.onmouseover = aggiungiClasseSelected;
    newButton.onmouseout = aggiungiClasseSelected;
    if (posizione < domande.length - 1) {
      //se non è l'ultima domanda entra nell'if
      // se funzione parte a caso (bug) fai () => {nomeFunzione}//
      newButton.onclick = () => {
        // se clicco questop bottone vuol dire che la risposta è sbagliata -- pusho in risposte incorrette
        incorrette(domande[posizione]);
        counterIncrease();
      };
    } else {
      newButton.onclick = () => {
        incorrette(domande[posizione]);
        lastQuestion();
      };
    }
    // document.getElementById("bottoni").appendChild(newButton);// si fa alla fine con un ciclo forEach
    newButton.innerHTML = domande[posizione].incorrect_answers[i]; //resa dinamica con parametri in ingresso
    possibleAnswers.push(newButton); //push dell'array
  }

  const newButton = document.createElement("button");

  newButton.id = "bottone3";
  newButton.classList.add("bottone");
  newButton.onmouseover = aggiungiClasseSelected;
  newButton.onmouseout = aggiungiClasseSelected;
  if (posizione < domande.length - 1) {
    newButton.onclick = () => {
      corrette(domande[posizione]); //se clicco questo bottone vuol dire che la risposta è giusta-- pusho in risposte corrette
      counterIncrease();
    };
  } else {
    newButton.onclick = () => {
      corrette(domande[posizione]);
      lastQuestion();
    };
  }
  newButton.innerHTML = domande[posizione].correct_answer;
  // document.getElementById("bottoni").appendChild(newButton);//vedi su
  possibleAnswers.push(newButton);

  shuffle(possibleAnswers); // richiamo la funzione per mischiare l'array (copiata da internet)
  possibleAnswers.forEach((element) => {
    // per ogni elemento lo aggiungo al div bottoni (dopo averli mischiati)
    document.getElementById("bottoni").appendChild(element);
  });
  const newTimer = document.createElement("div");
  newTimer.id = "timer";
  newTimer.classList.add("tempo");
  document.getElementById("contenitoreTimer");
  setTimeout(() => {
    if (posizione < domande.length - 1) {
      risposteIncorrette.push({});
      counterIncrease();
    } else {
      risposteIncorrette.push({});
      lastQuestion();
    }
  }, 20000);
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

/*---------------TIMER-----------*/
// timeDuration = 2;
// timer(timeDuration, document.querySelector("#tempo"));// da mettere dentro cast bottoni o titolo
// function timer(durata, display) {
//   let tempo = durata,
//     minuti,
//     secondi;
//   let intervallo = setIntervallo(function () {
//     minuti = parseInt(tempo / 60, 10);
//     secondi = parseInt(tempo % 60, 10);
//     minuti = minutes < 10 ? "0" + minuti : minuti;
//     secondi = secondi > 10 ? "0" + secondi : secondi;

//     display.textContent = minuti + ":" + secondi;

//     if (--tempo < 0) {
//       tempo = durata;
//       counter++;
//       if (counter < possibleAnswers) {
//         risposte();
//       }
//     }
//   });
// }
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

function timer() {
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  };

  const TIME_LIMIT = 20;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

  startTimer();

  function onTimesUp() {
    clearInterval(timerInterval);
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML =
        formatTime(timeLeft);
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
}
