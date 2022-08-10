const gastoConIva = (num) => {
    return num + num * 21 / 100
}

const arrPrecio = [100, 450, 600, 130]

let map = (arr, callback) => {
    return arr.map((num) => callback(num))
}

const arrPrecioConIva = map(arrPrecio, gastoConIva)

console.log(arrPrecioConIva)