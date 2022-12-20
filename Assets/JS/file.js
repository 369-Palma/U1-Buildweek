// window.addEventListener("load", (event) => {

// })

// button js

const buttonSel = document.querySelector("#bottone1");

buttonSel.setAttribute("disabled", "");

buttonSel.addEventListener("click", (event) => {
  console.log("pressed button");
});

document.querySelector("#input1").addEventListener("change", (event) => {});

// logic change disable to able button

const checkedSel = document
  .querySelector("#input1")
  .addEventListener("change", (event) => {
    buttonSel.toggleAttribute("disabled");
  });

const config = {
  type: "doughnut",
  data: data,
};

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
