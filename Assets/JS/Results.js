let myChart = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontSize = 18;

Chart.defaults.global.defaultFontColor = "white";

let risposte = new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: ["Corrette", "Sbagliate"],
    datasets: [
      {
        label: "Risposte",
        data: [75, 25],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderWidth: 1,
        borderColor: "white",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
      },
    ],
  },

  options: {
    title: {
      display: true,
    },
    legend: {
      display: true,
      position: "center",
      labels: {
        fontColor: "white",
      },
    },
  },
});


// ************** CODICE PER LA PAGINA CHE RICEVE I DATI  VARIABILI DA CAMBIARE***************
// questo mi cerca nel url del browser
const paginaDiPrima = window.location.search

const url = new URLSearchParams(paginaDiPrima)

const corrette = url.get("corrette")
const svagliatte = url.get("svagliatte")

console.log("risposte corrette:", corrette)
console.log("risposte svagliatte:", svagliatte)