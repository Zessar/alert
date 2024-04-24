

// Una funcion debe de tomar un solo argumento, y esta debe encontrar en su longuitud la letra 'F', en vez de devolver la letra 'F' debe de devolver el numero de veces que se repite la letra 'F' en el argumento.
// Ahora hay que crear otra funcion que haga lo mismo pero que sea mas generica, que tome dos argumentos, el primero sera el string y el segundo sera la letra que queremos contar.

/*function contarCaracteres (string, letra) {
    let contador = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === letra) {
            contador++;
        }
    }
    return contador;
}

//Reescribir la funcion contarFs para que use esta nueva funcion.

function contarFs (string) {
    const letra = 'F';
    const cantidad = contarCaracteres(string, 'F');
    return 'La cantidad de veces que se repite la letra ' + letra + ' es: ' + cantidad;
}

console.log(contarFs('FernanFdo'));*/


// function esPar (actual) {
//     if (actual % 2 === 0) {
//         return true;
//     } else if (actual % 2 === 1) {
//         return false;
//     } else {
//         return esPar(actual -2);
//     }
// }

// console.log(esPar(30));


// const min = (a, b) => {

//     if(a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(40,20));



// let fila = (prompt('escribe un numero'));
// let columna = (prompt('escribe un numero'));
// let tablero = '';

// for(let row = 0; row < fila; row++) {
//     for(let col = 0; col < columna; col++) {

//         if((row + col) % 2 === 0) {
//             tablero += ' ';
//         } else {
//             tablero += '#';
//         }
//     }

//     tablero += '\n';
// }

// console.log(tablero);

// let triangulo = '';
// let simbolo = '#';

// function triangle () {
// for(let i = 1; i <= 7; i++) {
//     triangulo += simbolo;
//     console.log(triangulo);
// }
// }

// triangle();

// let triangulo = "";
// let simbolo = "#"

// function triangle () {
// for (let i = 1; i <= 7; i++) {
//     triangulo += simbolo;
//     console.log(triangulo);
//     }
// }

// triangle();


// function fizzBuzz () {
// for (let num = 1; num <=100; num++) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (num % 3 === 0) {
//         console.log("Fizz");
//     } else if (num % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(num);
//     }
// }
// };

// fizzBuzz();


// let fila = (prompt("escribe un numero"));
// let columna = (prompt("escribe un numero"));
// let tablero = "";

// for (let row = 1; row < fila; row++) {
//     for (let col = 1; col < columna; col++) {
//         if ((row + col) % 2 === 0) {
//             tablero += " ";
//         } else {
//             tablero += "#";
//         }
//     }

//     tablero += '\n';
// }

// console.log(tablero);


alert('Acude a la Mesa de Operaciones');

  
  
  