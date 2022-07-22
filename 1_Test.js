let me = {
    name: "Jair",
    lastName: "Angarita",
    platziUser: "jjangarita",
    age: 30,
    email: "jair-angarita@hotmail.com",
    isAdult: true,
    savedMoney: 7000000,
    debt: 2400000
};

let completeName = me.name + " " + me.lastName;
let realMoney = me.savedMoney - me.debt;

console.log("Hola, mi nombre es " + completeName + " y tengo $" + realMoney + " ahorrado");

function fCompleteName(name, lastName) {
    return name + ' ' + lastName;
}

function saludo(name, lastName, platziUser) {
    const compName = fCompleteName(name, lastName);

    console.log("Mi nimbre es " + compName + " pero prefiero que me digas " + platziUser);
}


// Ejemplo de codicionales
function conseguirTipoSuscripcion(Suscripcion) {
    
    if (Suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }

    if (Suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }

    if (Suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }

    if (Suscripcion == 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}


// Ejemplo simplificado de codicionales

const tipoDeSuscripcion = {
    free:'Solo puedes tomar los cursos gratis',
    basic:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert:'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertDuo:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}

function conseguirTipoSuscripcion(suscripcion) {
    if (tipoDeSuscripcion[suscripcion]){
        console.log(tipoDeSuscripcion[suscripcion]);
        return;
    }
    console.warn('Ese tipo de suscripción no existe')
}