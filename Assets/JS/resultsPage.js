// ************** CODICE PER LA PAGINA CHE RICEVE I DATI  VARIABILI DA CAMBIARE***************
// questo mi cerca nel url del browser
const paginaDiPrima = window.location.search;

const url = new URLSearchParams(paginaDiPrima);

const corrette = parseInt(url.get("correct"));
const sbagliate = parseInt(url.get("wrong"));

let textCenter = ""

if (corrette > 5) {

  textCenter = `Congratulations!`
}
else {

  textCenter = `Oh no! Try again`

}


// *********** Plugin **************

Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      // Get ctx from string
      var ctx = chart.chart.ctx;

      // Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var maxFontSize = centerConfig.maxFontSize || 75;
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
      // Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
      var minFontSize = centerConfig.minFontSize;
      var lineHeight = centerConfig.lineHeight || 25;
      var wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      }

      // Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      var words = txt.split(' ');
      var line = '';
      var lines = [];

      // Break words up into multiple lines if necessary
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }

      centerY -= (lines.length / 2) * lineHeight;

      for (var n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      }
      //Draw text in center
      ctx.fillText(line, centerX, centerY);
    }
  }
});



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
        borderWidth: 1,
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
        color: '#FF6384', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: 15, // Default is 20 (as a percentage)
        minFontSize: 18, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 30, // Default is 25 (in px), used for when text wraps
      }
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
