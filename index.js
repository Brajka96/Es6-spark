import { fetchData } from './src/js/apiService';
import parseData from './src/js/dataParse';
import elementInfo from './src/js/dataInfo';

const streetsFilterBtn = document.getElementById('ulice-80');
const streetsLengthBtn = document.getElementById('duzina-ulica');
const parksAgeBtn = document.getElementById('starost');
const parksAreaSortBtn = document.getElementById('povrsina');
const parksTreesSortBtn = document.getElementById('stabla');
const allStreets = document.getElementById('sve-ulice');
const allParks = document.getElementById('svi-parkovi');

fetchData()
  .then(data => {

    const podaci = parseData(data);
    const parkovi = podaci.parkovi;
    const ulice = podaci.ulice;
    const izvjestajPark = elementInfo.parks;
    const izvjestajUlica = elementInfo.streets;

    izvjestajPark.printParks(parkovi);
    izvjestajUlica.printStreets(ulice);

    allParks.addEventListener('click', function() {
      izvjestajPark.printParks(parkovi);
    })

    allStreets.addEventListener('click', function() {
      izvjestajUlica.printStreets(ulice);
    })

    parksAgeBtn.addEventListener('click', function() {
      izvjestajPark.prosjecnaStarost(parkovi);
    })

    parksAreaSortBtn.addEventListener('click', function() {
      izvjestajPark.parkoviPoVelicini(parkovi);
    })

    parksTreesSortBtn.addEventListener('click', function() {
      izvjestajPark.parkoviPoBrojuDrveca(parkovi);
    })

    streetsFilterBtn.addEventListener('click', function () {
      izvjestajUlica.streets80(ulice);
    });

    streetsLengthBtn.addEventListener('click', function () {
      izvjestajUlica.streetsLength(ulice);
    })

  });
