//codigo del cuadrado
console.group("cuadrados")
//const ladoCuadrado= 5;
  //  console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;

} 
    //console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");


function areaCuadrado (lado) {
    return lado * lado;
}
//   console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2");
console.groupEnd();


    //codigo del triangulo
    console.group("Triangulo")
//const ladoTriangulo1= 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log(
//    "Los lados del triangulo miden: " 
//    + ladoTriangulo1 + 
//    "cm, " + 
//    ladoTriangulo2 + 
//    "cm, " + baseTriangulo + 
//    "cm"
//    );

//    const alturaTriangulo = 5.5;
//    console.log("La altura del traingulo es de: " + alturaTriangulo);

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    //console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

    function areaTriangulo(base, altura) {
    return (base * altura / 2);
    }

    console.groupEnd();

//codigo del triangulo
console.group("Circulo");


    //Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es:" + radioCirculo + "cm");
  
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

    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);    
}

//function calcularAreaTriangulo(){
    //const input1 = document.getElementById("InputTriangulo1");
    //const value1 = Number(input1.value);
    //const input2 = document.getElementById("InputTriangulo2");
    //const value2 = Number(input2.value);
    //const base = document.getElementById("InputBaseTriangulo");
    //const value3 = Number(base.value);
    //const area = areaTriangulo(value1,value2,value3);
    //alert("El area del triangulo es: " + area);
//} 
function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);
}