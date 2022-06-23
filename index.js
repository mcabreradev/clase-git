class Auto {
  constructor(brand){
    this.brand = brand;
  }

  start(){
    return `Starting ${this.brand}`;
  }
}

let auto1 = new Auto("BMW");

console.log(auto1.brand);
console.log(auto1.start());