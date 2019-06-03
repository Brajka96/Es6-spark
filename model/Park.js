import GradskiElement from './GradskiElement';

class Park extends GradskiElement {

  constructor(naziv, godina, povrsina, drvece) {
    super(naziv, godina);
    this.povrsina = povrsina;
    this.drvece = drvece;
    this.gustoca = this.drvece / this.povrsina;
  }
  
}

export default Park;