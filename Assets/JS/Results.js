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
