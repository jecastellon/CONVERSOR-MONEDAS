const input = document.querySelector("#input")
const boton = document.querySelector(".boton")
const resultado = document.querySelector("#resultado")
const divError = document.querySelector("#error")
const grafica = document.querySelector("#grafica")

boton.addEventListener("click", () =>{
    const valor = Number(input.value)
    moneda = document.querySelector(`#moneda`).value
        if(moneda == `dolar`){
            renderDolar(valor)
        }
        else if(moneda == `euro`){
            renderEuro(valor)
        }
        else if(moneda == `bitcoin`){
            renderBitcoin(valor)
        }
})

// Dolar

let getDolar = async () => {
try {
    let res = await fetch("https://mindicador.cl/api/dolar")
    let data = await res.json()
    console.log(data.serie[0].valor)
    return data.serie[0].valor
} catch (error) {
    divError.innerHTML = "Algo no está funcionando:" + error
console.log(error)
}}
let renderDolar = async (valor) => {
try {
    let valorDolar = await getDolar()
    let conversion = valor / valorDolar
    let template = ""
    template += `<p>Dólares: <b>$ ${conversion.toFixed(2)}</b></p>`
    resultado.innerHTML = template
    }
catch (error) {
console.log(error)
}}

// Euro

let getEuro = async () => {
try {
    let res = await fetch("https://mindicador.cl/api/euro")
    let data = await res.json()
    console.log(data.serie[0].valor)
    return data.serie[0].valor
} catch (error) {
    divError.innerHTML = "Algo no está funcionando:" + error
console.log(error)
}}
let renderEuro = async (valor) => {
try {
    let valorEuro = await getEuro()
    let conversion = valor / valorEuro
    let template = ""
    template += `<p>Euros: <b>$ ${conversion.toFixed(2)}</b></p>`
    resultado.innerHTML = template
    }
catch (error) {
console.log(error)
}}

// Bitcoin

let getBitcoin = async () => {
try {
    let res = await fetch("https://mindicador.cl/api/bitcoin")
    let data = await res.json()
    console.log(data.serie[0].valor)
    return data.serie[0].valor
} catch (error) {
    divError.innerHTML = "Algo no está funcionando:" + error
console.log(error)
}}
let renderBitcoin = async (valor) => {
try {
    let valorBitcoin = await getBitcoin()
    let conversion = valor / valorBitcoin
    let template = ""
    template += `<p>Bitcoins: <b>$ ${conversion.toFixed(2)}</b></p>`
    resultado.innerHTML = template
    }
catch (error) {
console.log(error)
}}








let graficaDolar = async () => {
    
}
