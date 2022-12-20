// window.addEventListener("load", (event) => {
//   return alert("asdffafadssda");
// });

const buttonPress = document.querySelector("#benchmarkBottone");

buttonPress.addEventListener("click", (event) => {
  buttonPress.classList.toggle("selected");
});
