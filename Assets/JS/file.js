
// window.addEventListener("load", (event) => {

// })

const buttonSel = document.querySelector("#bottone1")


buttonSel.setAttribute("disabled", "")

buttonSel.addEventListener("click", event => {
    console.log("pressed button")
})

document.querySelector("#input1").addEventListener("change", event => {

})



actionButton = () => {

    const buttonSel = document.querySelector("#bottone1")
    buttonSel.setAttribute("disabled", "")
    const checkedSel = document.querySelector("#input1").addEventListener("change", event => {

        buttonSel.classList.toggle("off")
    })





}