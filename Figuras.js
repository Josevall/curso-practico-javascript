//Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
} 
//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }

console.groupEnd();

//Codigo del triangulo

console.group("Triangulo");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Aqui interactuamos con el HTML

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTriangulo1");
    const inputLado2 = document.getElementById("InputTriangulo2");
    const inputBase = document.getElementById("InputTrianguloB");
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloB");
    const inputAltura = document.getElementById("InputTrianguloA");
    const valueBase = Number(inputBase.value);
    const valueAltura = Number(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area)
}

//Codigo del triangulo isosceles

function alturaTriangulo(ladoI1, ladoI2, baseI) {
    if(ladoI1 === ladoI2 && ladoI1 != baseI) {
        alert("Isosceles");
        const cateto = (baseI / 2) ** 2;
        const hipotenusa = (ladoI1) ** 2;
        const altura = Math.sqrt(hipotenusa - cateto);
        console.log(altura);
    }
    else {
        alert("No lo se)")
    }
}
function areaTrianguloI(ladoI1, ladoI2, baseI) {
    const Altura = alturaTriangulo(ladoI1, ladoI2, baseI);
    return Altura * baseI;
    
}

function perimetroTrianguloI(ladoI1, ladoI2, baseI) {
    return ladoI1 + ladoI2 + baseI;
}


//Aqui interactuamos con el html

function calcularPerimetroTrianguloI() {
    const inputLadoI1 = document.getElementById("InputTrianguloI1");
    const inputLadoI2 = document.getElementById("InputTrianguloI2");
    const inputbaseI = document.getElementById("InputTrianguloIB");
    const valueLadoI1 = Number(inputLadoI1.value);
    const valueLadoI2 = Number(inputLadoI2.value);
    const valuebaseI = Number(inputbaseI.value);

    const perimetro = perimetroTriangulo(valueLadoI1, valueLadoI2, valuebaseI);
    alert(perimetro);

}

function calcularAreaTrianguloI() {
    const inputLadoI1 = document.getElementById("InputTrianguloI1");
    const inputLadoI2 = document.getElementById("InputTrianguloI2");
    const inputbaseI = document.getElementById("InputTrianguloIB");
    const valueLadoI1 = Number(inputLadoI1.value);
    const valueLadoI2 = Number(inputLadoI2.value);
    const valuebaseI = Number(inputbaseI.value);

    const area = areaTrianguloI(valueLadoI1, valueLadoI2, valuebaseI);
    alert(area);
}

function calcularAlturaTrianguloI() {
    const inputLadoI1 = document.getElementById("InputTrianguloI1");
    const inputLadoI2 = document.getElementById("InputTrianguloI2");
    const inputbaseI = document.getElementById("InputTrianguloIB");
    const valueLadoI1 = Number(inputLadoI1.value);
    const valueLadoI2 = Number(inputLadoI2.value);
    const valuebaseI = Number(inputbaseI.value);

    const altura = alturaTriangulo(valueLadoI1, valueLadoI2, valuebaseI);
    alert(altura);
}

console.groupEnd(); 


 //Codigo del circulo
console.group("Circulo");

const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//Aqui interactuamos con el html
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
  
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
  }
  function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
  
    const area = areaCirculo(value);
    alert(area);
  }
console.groupEnd(); 





