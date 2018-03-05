function setup() {
    let selFra = document.getElementById("fra");
    let selTil = document.getElementById("til");
    let inpAntall = document.getElementById("antall");
    let selKlasse = document.getElementById("klasse");
    let btnBestill = document.getElementById("bestill");
    let divMelding = document.getElementById("melding");

    let priser = {
        "Kristiansand": { "Venezia": 500, "Barcelona": 600, "Cannes": 700, "Monaco": 800 },
        "Haugesund": { "Venezia": 550, "Barcelona": 650, "Cannes": 750, "Monaco": 850 },
        "Larvik": { "Venezia": 600, "Barcelona": 700, "Cannes": 800, "Monaco": 900 }
    }

        let førsteklasse = 500;
        let presidentStyle = 100;
        let økonomi = 0;
    

    
    btnBestill.addEventListener("click", bestillCruise);

    function bestillCruise(e) {
        let fra = selFra.value;
        let til = selTil.value;
        let pris= 0;

        if (priser[fra] && priser[fra][til]) {
            pris = priser[fra][til];
        } 

        if (Number.isInteger(inpAntall.valueAsNumber)) {
            pris *= inpAntall.valueAsNumber;
        }

        divMelding.innerHTML = `Din cruisereise 
        fra ${fra} 
        til ${til} 
        koster ${pris}kr`;
    }
}