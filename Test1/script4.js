let danielCF = {
    nombre: 'Daniel ',
    apellido: 'Ciorraga ',
    email: 'tal@paracual.com ',
    edad: 22,
    estoEsVerdad: true,
    estoEsMentira: false,

    saludar: function () {
        return "Hola, me llamo " + this.nombre + this.apellido + "y tengo " + this.edad + " años.";
    }

};

console.log(danielCF.saludar());


//ES5

let Persona = function (id, nom, ed) {
    this.id = id;
    this.nombre = nom;
    this.edad = ed;

    this.showInfo = function () {
        return '[' + this.id + '] ' + this.nombre + ', ' + this.edad;
    }
}

let daniel = new Persona(1, 'Daniel', 22);

let clase = [
    new Persona(1, 'Daniel', 22),
    new Persona(2, 'Cristina', 23),
    new Persona(3, 'Carlos', 24),
]

for (let index = 0; index < clase.length; index++) {
    console.log(clase[index].showInfo());

}

console.log('');º

//ES6

class Persona2 {
    constructor(id,nom,ed){
        this.id = id;
        this.nombre = nom;
        this.edad = ed;
    }

    showInfo(){
        return '[' + this.id + '] ' + this.nombre + ', ' + this.edad;
    }
}

let clase2 = [
    new Persona2(1, 'Daniel', 22),
    new Persona2(2, 'Cristina', 23),
    new Persona2(3, 'Carlos', 24),
]

for (let index = 0; index < clase2.length; index++) {
    console.log(clase[index].showInfo());
}