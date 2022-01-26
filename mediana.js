function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Mediana con una lista

const lista1 = [100, 200, 300, 500, 600];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if(numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioEemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioEemento1y2;

} else {
    mediana = lista1[mitadLista1];
}


//Mediana con una funcion 

function calcularMediana (lista) {
    const listaOrdenada = lista.sort(function (a, b) {
        return a - b;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar(numerito) {
        if(numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }


    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioEemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioEemento1y2;

    } else {
        mediana = listaOrdenada[mitadLista];
}
return mediana
}