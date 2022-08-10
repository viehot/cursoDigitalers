const operacion = (a, b, c) => {
    switch (c) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
        default:
            return 0
    }
};

console.log(operacion(10, 5, "o"))

let titulo = document.querySelector(".rojo").getAttribute("class");

console.log(titulo)