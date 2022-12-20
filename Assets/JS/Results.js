/*let myChart = document.getElementById("myChart").getContext("2d");

let dato1 = 60;
let dato2 = 40;

let ciambella = new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: "Corrette",
    datasets: [
      {
        label: "Corrette",
        data: dato1,
        backgroundcolor: "red",
      },
    ],
  },
});*/

let myChart = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontSize = 18;

Chart.defaults.global.defaultFontColor = "white";

let massPopChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["Risposte", "Corrette", "Sbagliate"],

    datasets: [
      {
        label: "Risposte",

        data: [
          100,

          75,

          25,
        ],

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

      text: "Risposte:",

      fontSize: 25,
    },

    legend: {
      display: true,

      position: "right",

      labels: {
        fontColor: "white",
      },
    },

    layout: {
      padding: {
        left: 50,

        right: 0,

        bottom: 0,

        top: 0,
      },
    },
  },
});
