function calcularMedia([lista]) {
    const sumaLista = lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


function onClickButtonMedia() {
    const inputmedmodmed = document.getElementById("inputmedmodmed");
    const mediaValue = inputmedmodmed.value;

    const promedioLista = calcularMedia(mediaValue);

    const resultMedia = document.getElementById("resultMedia");
    resultMedia.innerText = "La mediana es: " + promedioLista;
}

function calcularModa (lista) {
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;

            } else {
                listaCount[elemento] = 1;
            }
        }
    )

    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
    });

    const moda = listaArray[listaArray.length - 1];

    return moda;
}



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