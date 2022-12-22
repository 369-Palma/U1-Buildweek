// window.addEventListener("load", (event) => {

// })

// button js

const buttonSel = document.querySelector("#bottone1");

buttonSel.setAttribute("disabled", "");

buttonSel.addEventListener("click", (event) => {
  console.log("pressed button");
});

document.querySelector("#input1").addEventListener("change", (event) => { });

// logic change disable to able button

const checkedSel = document
  .querySelector("#input1")
  .addEventListener("change", (event) => {
    buttonSel.toggleAttribute("disabled");
  });
