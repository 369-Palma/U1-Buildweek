// document.querySelector("body").addEventListener("click", (event) => {
//     alert("hi u cliked body")

// ****new logic star****

const gruppoStelle = document.querySelector("#star10")

const stelleArray = document.querySelectorAll(".star")

gruppoStelle.onclick = event => {
    const classeInside = event.target.classList
    console.log("this is the class inside", classeInside)

    stelleArray.forEach(stella => stella.classList.remove("piena")
    )
    classeInside.add("piena")



}