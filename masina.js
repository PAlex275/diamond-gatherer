export class Masina {
    constructor(marca, model, anFabricatie, capacitateCilindrica, benzina) {
        this.marca = marca;
        this.model = model;
        this.anFabricatie = anFabricatie;
        this.capacitateCilindrica = capacitateCilindrica;
        this.benzina = benzina;
    }
    getMasina() {
        console.log(`Masina este un ${this.marca} ${this.model} din anul ${this.anFabricatie}.`);
    }
    getCapacitateCilindrica() {
        console.log(`Masina are capacitatea cilinddrica de ${this.capacitateCilindrica} cm3.`);
    }
    getBenzina() {
        if (this.benzina)
            console.log(`Masina porneste, are destula benzina.`);
        else
            console.log(`Masina nu porneste, nu are destula benzina.`);
    }
}

const arr1 = ["Love", "I", "Javascript"];
arr1.splice(1, 1);
arr1.unshift("I");
console.log(arr1);


const array2 = ["Paul", 1, false, { name: "Jon Snow"}, [1, 2, 3], null, undefined, function() { console.log('Test')} ];
array2.forEach(function(item, index){
    console.log(`Pozitia: ${index},  Valoare:  ${item},  Tipul:  ${typeof item}`)});



const masina1 = new Masina('Opel','Astra K','2018','1798',true);
masina1.getMasina();
masina1.getCapacitateCilindrica();
masina1.getBenzina();

const masina2 = new Masina('Audi','S7','2016','3989',true);
masina2.getMasina();
masina2.getCapacitateCilindrica();
masina2.getBenzina();

const masina3 = new Masina('Bmw','M8','2019','4196',false);
masina3.getMasina();
masina3.getCapacitateCilindrica();
masina3.getBenzina();

