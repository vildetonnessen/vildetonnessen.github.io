function setup() {
    let selFra = document.getElementById("fra");
    let selTil = document.getElementById("til");
    let inpAntall = document.getElementById("antall");
    let chkLeiebil = document.getElementById("leiebil");
    let btnBestill = document.getElementById("bestill");
    let divMelding = document.getElementById("melding");

    let priser = {
        "OSL": { "SVG": 399, "BGO": 410, "HAU": 180 },
        "SVG": { "BGO": 50, "HAU": 10 },
        "BGO": { "HAU": 5 }
    }

    let leiepris = 1000;

    btnBestill.addEventListener("click", bestillFly);

    function bestillFly() {
        let fra = selFra.value;
        let til = selTil.value;
        let pris= 0;

        if (priser[fra] && priser[til]) {
            pris = priser[fra][til];
        } else {
            pris = priser[til][fra];
        }

        if (Number.isInteger(inpAntall.valueAsNumber)) {
            pris *= inpAntall.valueAsNumber;
        }

        if (chkLeiebil.checked) {
            pris += leiepris;
        }

        divMelding.innerHTML = `Din flyreise 
        fra ${fra} 
        til ${til} 
        koster ${pris}kr`;
    }
}