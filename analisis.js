//Helpers

function esPar(numerito) {
    //if (numerito % 2 === 0) {
      //  return true;
    //} else {
      //  return false;
    //}
    return (numerito % 2 === 0); //-->> es lo mismo que arriba
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const salarioCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

//Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const persontaMitad1 = lista[mitad - 1];
        const persontaMitad2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([persontaMitad1, persontaMitad2]);
        return mediana
    } else {
        const persontaMitad = lista[mitad];
        return persontaMitad;
    }
}


//Mediana general

const salarioColSorted = salarioCol.sort(
    function (salaryA, salaryB) {
        return salaryA -  salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salarioColSorted)

//Mediana del top 10%

const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = (salarioColSorted.length - spliceStart);

const salariosColTop10 = salarioColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log( {
    medianaGeneralCol, 
    medianaTop10Col
})