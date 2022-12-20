// document.querySelector("body").addEventListener("click", (event) => {
//     alert("hi u cliked body")



// })


const buttonSel = document.querySelector(".buttone");

// buttonSel.setAttribute("disabled", "");

buttonSel.addEventListener("click", (event) => {
    console.log("u press the button")


});

// logic feedback stelle 

const stelleFeedback = [...document.getElementsByClassName("star")]

console.log(stelleFeedback[0])
console.log(stelleFeedback[1])

const stellePiene = document.getElementsByClassName("star piena-blue")
const stelleVuote = document.getElementsByClassName("star vuota-blue")


