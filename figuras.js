//codigo del cuadrado
console.group("cuadrados")
function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd();


    //codigo del triangulo
    console.group("Triangulo")
    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }

    function areaTriangulo(base, altura) {
    return (base * altura / 2);
    }
    console.groupEnd();

//codigo del triangulo
console.group("Circulo");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

    //PI
const PI = Math.PI;
console.log("PI es:" + PI);

    //Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI; 
}
    //Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.log("El area del circulo es:" + areaCirculo + "cm^2");

console.groupEnd();

// Aqui interactuamos con html

//CUADRADO BOTON
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//TRIANGULO BOTON
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
    
    function calcularAreaTriangulo(){
    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);   
    }    
}


function triangulo2(){
    let lado1 = document.getElementById("tLado1");
    let tLado1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("tLado2");
    let tLado2 = parseFloat(lado2.value);

    let base = document.getElementById("tBase");
    let tBase = parseFloat(base.value);

    let altura = document.getElementById("tAltura");
    let tAltura = parseFloat(altura.value);
    
    let tPerimetro = tLado1 + tLado2 + tBase;
    let tArea = (tBase*tAltura)/2;

    alert(`El perímetro del triangulo es: ${tPerimetro}cm y el área es de ${tArea}cm^2`);

}

trinagulo(6, 6, 4, 5.5);
