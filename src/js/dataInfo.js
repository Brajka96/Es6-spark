const parks = (function () {

    function showParkInfo(park, i) {
        const {naziv, godina, povrsina, drvece, gustoca} = park;

        const info =
            `<div class="card">
          <div class="card-header">
           <h2 class="mb-0">
           <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#park-${i}"
              aria-expanded="true" aria-controls="collapseOne">
              ${naziv}
           </button>
           <span id="parks-info-badge" class="badge badge-primary badge-pill park-badge">${povrsina}km<sup>2</sup></span>
           <span id="parks-info-badge" class="badge badge-danger badge-pill park-badge">drvece: ${drvece}</span>
           </h2>
           </div>
    
           <div id="park-${i}" class="collapse" aria-labelledby="headingOne" data-parent="#parkovi">
           <div class="card-body">
               Park '${naziv}' izgrađen je ${godina} godine. Park je površine ${povrsina}km<sup>2</sup> i ima 
               ${drvece} drveca. Gustoća drveća je ${gustoca}
             </div>
            </div>
           </div>`

        return info;
    }

    function showParksAvgAge(average) {
        const output = `
          <div class="jumbotron jumbotron-fluid">
           <div class="container">
            <h2 class="display-4">Prosječna starost parkova</h2>
            <p class="lead">${average} godina</p>
           </div>
          </div>`;

        return output;
    }

    function izracunajStarost(godina) {
        return new Date().getFullYear() - parseInt(godina);
    }

    function prosjecnaStarost(parkovi) {
        const average = parkovi.reduce((acc, park) => acc + izracunajStarost(park.godina), 0) / parkovi.length;

        document.getElementById('parkovi').innerHTML = showParksAvgAge(average)
    }

    function parkoviPoBrojuDrveca(parkovi) {
        const sorted = [...parkovi].sort((a, b) => b.drvece - a.drvece);
        
        printParks(sorted);
    }

    function parkoviPoVelicini(parkovi) {
        const sorted = [...parkovi].sort((a, b) => b.povrsina - a.povrsina);

        printParks(sorted);
    }

    function printParks(parkovi = []) {
        let output = '';

        parkovi.forEach((park, i) => output += showParkInfo(park, i))

        document.getElementById('parkovi').innerHTML = output;
    };

    return {
        printParks,
        parkoviPoVelicini,
        parkoviPoBrojuDrveca,
        prosjecnaStarost
    }

})();

const streets = (function () {

    const klasifikacijaUlice = new Map();
    klasifikacijaUlice.set(1, 'prolaz');
    klasifikacijaUlice.set(2, 'mala');
    klasifikacijaUlice.set(3, 'normalna');
    klasifikacijaUlice.set(4, 'velika');

    function getType(klas) {
        return klasifikacijaUlice.get(klas);
    }

    function showStreetLengthInfo(ukupna, prosjecna) {
        const output = `
          <div class="jumbotron jumbotron-fluid">
           <div class="container">
            <h2 class="display-4">Dužina ulica</h2>
            <p class="lead">Prosječna: ${prosjecna.toFixed(2)}km</p>
            <p class="lead">UKUPNA: ${ukupna}km</p>
           </div>
          </div>`;

        return output;
    }

    function showStreetInfo(ulica, i) {
        const { naziv, godina, duzina, klasifikacija } = ulica;

        const info =
            `<div class="card">
              <div class="card-header">
                <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#ulica-${i}"
                  aria-expanded="true" aria-controls="collapseOne">
                  ${naziv}
                </button>
                </h2>
              </div>
    
              <div id="ulica-${i}" class="collapse" aria-labelledby="headingOne" data-parent="#ulice">
                <div class="card-body">
                 Ulica '${naziv}' izgrađena je ${godina} godine. Ulica je dužine ${duzina}km. 
                 Tip ulice: "${getType(klasifikacija)}" 
                </div>
              </div>
             </div>`

        return info;
    }

    function streetsLength(ulice) {
        const ukupna = ulice.reduce((acc, ulica) => acc + ulica.duzina, 0);
        const prosjecna = ukupna / ulice.length;

        document.getElementById('ulice').innerHTML = showStreetLengthInfo(ukupna, prosjecna);
    }

    function streets80(ulice) {
        const streets_80 = ulice.filter(ulica => ulica.godina < 1990 && ulica.godina > 1979);

        printStreets(streets_80);
    }

    function printStreets(ulice = []) {
        let output = '';

        ulice.forEach((ulica, i) => output += showStreetInfo(ulica, i));

        document.getElementById('ulice').innerHTML = output;
    };

    return {
        printStreets,
        streets80,
        streetsLength
    }
})()

export default {
    parks,
    streets
};