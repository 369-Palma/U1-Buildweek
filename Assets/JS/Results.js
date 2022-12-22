// ************** CODICE PER LA PAGINA CHE RICEVE I DATI  VARIABILI DA CAMBIARE***************
// questo mi cerca nel url del browser
const paginaDiPrima = window.location.search;

const url = new URLSearchParams(paginaDiPrima);

const corrette = parseInt(url.get("correct"));
const sbagliate = parseInt(url.get("wrong"));

console.log("risposte corrette:", corrette);
console.log("risposte sbagliate:", sbagliate);

//creo il grafico

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
        data: [corrette, sbagliate],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderWidth: 1,
        borderColor: "white",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
      },
    ],
    let arc = d3.arc()
.innerRadius(radius * 0.5) // Dimensioni del foro donut
.outerRadius(radius * 0.8)
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

const totale = corrette + sbagliate;
const percentualeCorrette = ((corrette / totale) * 100).toFixed(1);
const percentualeSbagliate = ((sbagliate / totale) * 100).toFixed(1);

//percentuali delle risposte corrette e sbagliate
document.getElementById("percentualeCorrette").innerHTML =
  percentualeCorrette + "%";
document.getElementById("percentualeSbagliate").innerHTML =
  percentualeSbagliate + "%";

//raw data
document.getElementById("numeroCorrette").innerHTML =
  corrette + "/" + totale + " questions";
document.getElementById("numeroSbagliate").innerHTML =
  sbagliate + "/" + totale + " questions";
