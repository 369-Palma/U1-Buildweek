// ************** CODICE PER LA PAGINA CHE RICEVE I DATI ***************
// questo mi cerca nel url del browser
const paginaDiPrima = window.location.search

const url = new URLSearchParams(paginaDiPrima)

const corrette = url.get("corrette")
const svagliatte = url.get("svagliatte")

console.log("risposte corrette:", corrette)
console.log("risposte svagliatte:", svagliatte)