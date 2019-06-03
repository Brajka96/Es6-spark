import GradskiElement from './GradskiElement';

class Ulica extends GradskiElement {

  constructor(naziv, godina, duzina, klasifikacija = 3) {
    super(naziv, godina);
    this.duzina = duzina;
    this.klasifikacija = klasifikacija;
  }
 
}

export default Ulica;