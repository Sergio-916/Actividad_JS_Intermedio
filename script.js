// 1 Escribe una función que determine si un número es primo o no
function isPrime() {
    let num = Number(document.getElementById("isprime").value);
    console.log(num)
    let output = document.getElementById("output")
    if (num === 1) {
        output.textContent = false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            output.textContent = false;
            break;
        }
        else {
            output.textContent = true;
        }
    }

}

// 2 Operaciones de matriz: Implementa una función que realice operaciones de matriz,
// como suma, resta o multiplicación, en dos matrices dadas


function addition() {
    let te1 = document.getElementById("text1").value;
    let te2 = document.getElementById("text2").value;
    let div = document.getElementById("arrayRes");
    let myArr1 = te1
        .replaceAll(" ", "")
        .split(",");
    let myArr2 = te2
        .replaceAll(" ", "")
        .split(",");
    if (myArr1.length !== myArr2.length) {
        div.textContent = `Length of array [${myArr1}] not equal to array [${myArr2}]`;
    } else {
        let myArr3 = myArr1.map((item, index) => {
            item = +item
            myArr2[index] = +myArr2[index]
            return item + myArr2[index];;
        })
        div.textContent = myArr3;
    }
}
function substraction() {
    let te1 = document.getElementById("text1").value;
    let te2 = document.getElementById("text2").value;
    let div = document.getElementById("arrayRes");
    let myArr1 = te1
        .replaceAll(" ", "")
        .split(",");
    let myArr2 = te2
        .replaceAll(" ", "")
        .split(",");
    if (myArr1.length !== myArr2.length) {
        div.textContent = `Length of array [${myArr1}] not equal to array [${myArr2}]`;
    } else {
        let myArr3 = myArr1.map((item, index) => {
            item = +item
            myArr2[index] = +myArr2[index]
            return item - myArr2[index]
        })
        div.textContent = myArr3;
    }
}
function multiplication() {
    let te1 = document.getElementById("text1").value;
    let te2 = document.getElementById("text2").value;
    let div = document.getElementById("arrayRes");
    let myArr1 = te1
        .replaceAll(" ", "")
        .split(",");
    let myArr2 = te2
        .replaceAll(" ", "")
        .split(",");
    if (myArr1.length !== myArr2.length) {
        div.textContent = `Length of array [${myArr1}] not equal to array [${myArr2}]`;
    } else {
        let myArr3 = myArr1.map((item, index) => {
            item = +item
            myArr2[index] = +myArr2[index]
            return item * myArr2[index]
        })
        div.textContent = myArr3;
    }
}
function division() {
    let te1 = document.getElementById("text1").value;
    let te2 = document.getElementById("text2").value;
    let div = document.getElementById("arrayRes");
    let myArr1 = te1
        .replaceAll(" ", "")
        .split(",");
    let myArr2 = te2
        .replaceAll(" ", "")
        .split(",");
    if (myArr1.length !== myArr2.length) {
        div.textContent = `Length of array [${myArr1}] not equal to array [${myArr2}]`;
    } else {
        let myArr3 = myArr1.map((item, index) => {
            item = +item
            myArr2[index] = +myArr2[index]
            return Math.round(item / myArr2[index])
        })
        div.textContent = myArr3;
    }
}

// 3-Suma de números en un rango: Escribe una función que calcule la suma de todos
// los números en un rango dado (por ejemplo, de a a b).


function sumRange() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let result = document.getElementById("sum");
    let sum = a;
    for (let i = a + 1; i <= b; i++) {
        sum += i;
    }
    result.textContent = sum;
}


// 4-Contar vocales: Crea una función que cuente el número de vocales en una cadena
// de texto

function vocales() {
    let result = document.getElementById("res")
    let text = (document.getElementById("vocales").value).toLowerCase();
    let myArr = text.split("");
    result.textContent = myArr.filter(item => "aeiou".includes(item)).length;
};

// 5-De una matriz devuelve una matriz con elementos únicos.(sin duplicados).
// Por eje: [“Sofia”, “Maria”, “Pedro, “Sofia”] → [“Sofia”, “Maria”, “Pedro”]

function uniqueArr() {
    let res = document.getElementById("unArr")
    let myText = document.getElementById("inputUnique").value;
    let myArr = myText
        .replaceAll(" ", "")
        .split(",");
    newArr = myArr.filter((item, index) => myArr.indexOf(item) == index)
    res.textContent = newArr.join(", ");

}

// 6-Crea una función que invierta una cadena de texto sin usar reverse()

function reverseString() {
    let string = document.getElementById("reverse1").value;
    let res = document.getElementById("res1")
    let myArr = string.split("");
    myArr.sort(a => - 1);
    res.textContent = myArr.join("");

}

// INTERACCIÓN CON EL DOM
// 1-Generar un carrusel de imágenes: Utiliza el DOM para crear un carrusel de
// imágenes que permite al usuario avanzar o retroceder entre imágenes.

let pictures = document.getElementById("pictures");
let index = 0;
let ind = 3;

function carousel() {

    let picArray = ["bike1.jpg", "bike2.jpg", "bike3.jpg"];
    pictures.src = `images/${picArray[index]}`;
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
}
//setInterval(carousel, 10000);

function clickRight() {
    let picArray = ["bike1.jpg", "bike2.jpg", "bike3.jpg", "bike4.jpg"];
    pictures.src = `images/${picArray[index]}`;
    if (index < 3) {
        index++;
    } else {
        index = 0;
    }
}
function clickLeft() {
    let picArray = ["bike1.jpg", "bike2.jpg", "bike3.jpg", "bike4.jpg"];
    pictures.src = `images/${picArray[ind]}`;
    if (ind > 0) {
        ind--;
    } else {
        ind = 3;
    }
}
// 2-Texto que se lee más: Crea un botón que, al hacer clic, cambia el tamaño del texto
//     de un elemento en el DOM para que sea más grande o más pequeño.

let mas1 = document.getElementById("mas1");
let menos = document.getElementById("menos");
function mas11() {
    let textPlus = document.getElementById("textPlus");
    textPlus.style.fontSize = parseInt(getComputedStyle(textPlus, '').fontSize) + 2 + 'px';
}
function menos1() {
    let textPlus = document.getElementById("textPlus");
    textPlus.style.fontSize = parseInt(getComputedStyle(textPlus, '').fontSize) - 2 + 'px'
}
mas1.addEventListener("click", mas11);
menos.addEventListener("click", menos1);

// 3-Tarjetas clickeables: Genera una serie de tarjetas en el DOM, cada una con un
//     contenido diferente. Permite que el usuario haga clic en una tarjeta para expandirla y
//     mostrar más detalles.

let cards = document.querySelectorAll(".card-holder")

cards.forEach((item) => {
    function output() {
        this.classList.toggle("card-holder-big")
        this.children.desc.classList.toggle("desc-visible")
    }
    item.addEventListener("click", output)
});

