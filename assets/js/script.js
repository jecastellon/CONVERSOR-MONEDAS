const input = document.querySelector("#input")
const boton = document.querySelector(".boton")
const resultado = document.querySelector("#resultado")
const divError = document.querySelector("#error")
const grafica = document.querySelector("#grafica")
let miGraf = null

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
}
renderGraficaDolar()
}

async function getDataDolar() {
    let res = await fetch("https://mindicador.cl/api/dolar")
    let data = await res.json()
    const labels = data.serie.map(item => item.fecha).reverse().slice(-10);
    const valores = data.serie.map(item => item.valor).reverse().slice(-10);
    return{labels, valores}
}
async function renderGraficaDolar() {
    const { labels, valores } = await getDataDolar();
    if (miGraf) {
        miGraf.destroy()
    }
    const grafDOM = document.querySelector("#grafica")
    grafDOM.style.backgroundColor = "white"
    const config = {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Dólar observado",
                    backgroundColor: "red",
                    borderColor: "blue",
                    data: valores
                }
            ]
        }
    }
    miGraf = new Chart(grafDOM, config)
}

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
}
renderGraficaEuro()
}

async function getDataEuro() {
    let res = await fetch("https://mindicador.cl/api/euro")
    let data = await res.json()
    const labels = data.serie.map(item => item.fecha).reverse().slice(-10);
    const valores = data.serie.map(item => item.valor).reverse().slice(-10);
    return{labels, valores}
}
async function renderGraficaEuro() {
    const { labels, valores } = await getDataEuro();
    if (miGraf) {
        miGraf.destroy()
    }
    const grafDOM = document.querySelector("#grafica")
    grafDOM.style.backgroundColor = "white"
    const config = {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Euro observado",
                    backgroundColor: "red",
                    borderColor: "blue",
                    data: valores
                }
            ]
        }
    }
    miGraf = new Chart(grafDOM, config)
}

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
}
renderGraficaBitcoin()
}

async function getDataBitcoin() {
    let res = await fetch("https://mindicador.cl/api/bitcoin")
    let data = await res.json()
    const labels = data.serie.map(item => item.fecha).reverse().slice(-10);
    const valores = data.serie.map(item => item.valor).reverse().slice(-10);
    return{labels, valores}
}
async function renderGraficaBitcoin() {
    const { labels, valores } = await getDataBitcoin();
    if (miGraf) {
        miGraf.destroy()
    }
    const grafDOM = document.querySelector("#grafica")
    grafDOM.style.backgroundColor = "white"
    const config = {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Bitcoin observado",
                    backgroundColor: "red",
                    borderColor: "blue",
                    data: valores
                }
            ]
        }
    }
    miGraf = new Chart(grafDOM, config)
}
