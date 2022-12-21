const click_body = document.querySelector("body")

click_body.addEventListener("click", (event) => {



    // ************** CODICE PER LA PAGINA CHE PUSHA I DATI ***************
    const correttePusha = 9
    const svagliattePusha = 1

    let urlP = new URLSearchParams()
    urlP.append("correct", correttePusha)
    urlP.append("wrong", svagliattePusha)

    // metter i datti nel url
    let link = "ResultsPage.html?" + urlP.toString()
    location.href = link

    // apre la nuova pagina

    window.open(link)


})





