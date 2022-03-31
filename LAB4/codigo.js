function numeroCuadradoCubo() {
    var num = prompt("Introduce un numero: ", 0);
    const lista= [];
    document.write(tabla="<table id='table1' ><tbody><tr><th>Tabla</th><th>Valor</th></tr>") 
    for (let i=1; i <= num; i++){
        lista.push(i);
        console.log(lista[i-1]);
        document.write("<tr><td>Valor\n ",i, "</td><td>\n", lista[i-1], "</td></tr>");
    }
    console.log(lista);
    var numCuadrado= num*num;
    var numCubo= num*num*num;
    lista.push(numCuadrado);
    lista.push(numCubo);
    document.write("<tr><td>Cuadrado</td><td>",numCuadrado, "</td></tr>");
    document.write("<tr><td>Cubo</td><td>",numCubo, "</td></tr>");
    console.log(lista);
    document.write(tabla="</tbody></table>");
}

numeroCuadradoCubo();

function suma(){
    num1=Math.floor(Math.random() * 100);
    num2=Math.floor(Math.random() * 100);
    const start = Date.now();
    var sum = prompt("Introduce el resultado de la suma: " + num1 + " + " + num2 , 0);
    
    var resultado= num1+num2;
    if (sum == resultado){
        calificacion= "Correcta"
    }
    else{
        calificacion= "Incorrecta"
    }
	const duration = (Date.now() - start) / 1000;
    alert("El resultado de la suma es " + resultado + ", su respuesta a sido " + calificacion + 
    ".\nLe ha tomado " + duration + " segundos")
    console.log(duration);
}

suma();

function contador(arreglo){
    var negativos=0;
    var positivos=0;
    var ceros=0;
    for (i=0;i<(arreglo.length);i++){
        if (arreglo[i]<0){
            negativos++
        }
        else if (arreglo[i]==0){
            ceros++
        }
        else if (arreglo[i]>0){
            positivos++
        }
    }
    alert ("NEGATIVOS: "+negativos+"\nCEROS: "+ceros+"\nPOSITIVOS: "+positivos);
}
arreglo=[-1,2,10,10100110,-2,0,0,0,0,-1231,2.2,];
console.log(arreglo);
contador(arreglo);

function inverso(numInv){
    var a=0
    var inv=""
    for (i=numInv.length -1; i >= 0;--i){
        a++
        nodo=numInv[i]
        inv=inv + nodo.toString();
    }
    console.log(inv);
    return parseInt(inv)
}
var numInv=[1,5,2,3];
console.log(inverso(numInv));

function solucion()


const disfrutar = () => console.log("Disfruta tu cerveza");

disfrutar();
