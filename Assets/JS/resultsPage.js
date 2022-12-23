// ************** CODICE PER LA PAGINA CHE RICEVE I DATI  letIABILI DA CAMBIARE***************
// questo mi cerca nel url del browser
const paginaDiPrima = window.location.search;

const url = new URLSearchParams(paginaDiPrima);

const corrette = parseInt(url.get("correct"));
const sbagliate = parseInt(url.get("wrong"));

let textCenter = "";

if (corrette > 5) {
  textCenter = `Congratulations!`;
} else {
  textCenter = `Oh no! Try again`;
}

// >>>>>>*********** Plugin **************>>>>>

Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      // Get ctx from string
      let ctx = chart.chart.ctx;

      // Get options from the center object in options
      let centerConfig = chart.config.options.elements.center;
      let fontStyle = centerConfig.fontStyle || "Arial";
      let txt = centerConfig.text;
      let color = centerConfig.color || "#000";
      let maxFontSize = centerConfig.maxFontSize || 75;
      let sidePadding = centerConfig.sidePadding || 20;
      let sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
      // Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      let stringWidth = ctx.measureText(txt).width;
      let elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      let widthRatio = elementWidth / stringWidth;
      let newFontSize = Math.floor(30 * widthRatio);
      let elementHeight = chart.innerRadius * 2;

      // Pick a new font size so it will not be larger than the height of label.
      let fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
      let minFontSize = centerConfig.minFontSize;
      let lineHeight = centerConfig.lineHeight || 25;
      let wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      }

      // Set font settings to draw it correctly.
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      let centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      let words = txt.split(" ");
      let line = "";
      let lines = [];

      // Break words up into multiple lines if necessary
      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + " ";
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + " ";
        } else {
          line = testLine;
        }
      }

      centerY -= (lines.length / 2) * lineHeight;

      for (let n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      }
      //Draw text in center
      ctx.fillText(line, centerX, centerY);
    }
  },
});
// <<<<<<<*********** Plugin **************<<<<<

//creo il grafico

let myChart = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontSize = 18;

Chart.defaults.global.defaultFontColor = "white";

let risposte = new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: ["Wrong", "Correct"],
    datasets: [
      {
        label: "Risposte",
        data: [sbagliate, corrette],
        backgroundColor: ["#D20094", "#00FFFF"],
        borderWidth: 2,
        borderColor: "white",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
      },
    ],
  },

  options: {
    elements: {
      center: {
        text: textCenter,
        color: "#FF6384", // Default is #000000
        fontStyle: "Arial", // Default is Arial
        sidePadding: 15, // Default is 20 (as a percentage)
        minFontSize: 18, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 20, // Default is 25 (in px), used for when text wraps
      },
    },
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

if (percentualeCorrette >= 60) {
  document.getElementById("resultsrisultatoTestoBlu").innerText =
    "You passed the exam.";
  document.getElementById("resultstestoCerchio").innerText =
    "We'll send you the certificate in few minutes.";
} else {
  document.getElementById("resultsrisultatoTestoBlu").innerText =
    "You didn't pass the exam.";
  document.getElementById("resultstestoCerchio").innerText = "";
}

const superato = document.getElementById("resultstitoloCerchioRisultato");

const superato1 = document.getElementById("resultstitoloCerchioRisultato");

const certificato = document.getElementById("resultstitoloCerchioRisultato");
const nonSuperato = document.getElementById("resultstitoloCerchioRisultato");
if (percentualeCorrette >= 60) {
  superato.innerText = "Congratulations!";
  superato1.innerText = "You passed the exam.";
  certificato.innerText = "We'll send you the certificate in few minutes.";
} else {
  nonSuperato.innerText = "Oh no! Try again";
  document.getElementById("resultsrisultatoTestoBlu").innerText =
    "You didn't pass the exam.";
  document.getElementById("resultstestoCerchio").innerText = "";
}
document.getElementById("divRisultato").appendChild(pRisultato);

document.getElementsByClassName("resultscerchio").appendChild("");
document.getElementById("myChart").appendChild(newDiv);
document.getElementById("myChart").appendChild(newDiv);
