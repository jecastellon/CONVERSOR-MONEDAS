//Se adjunta esta versión alternativa con menos código

const input = document.querySelector("#input");
const boton = document.querySelector(".boton");
const resultado = document.querySelector("#resultado");
const divError = document.querySelector("#error");
let miGraf = null;

const getValorMoneda = async (moneda) => {
    try {
        const res = await fetch(`https://mindicador.cl/api/${moneda}`);
        const data = await res.json();
        return data.serie[0].valor;
    } catch (error) {
        divError.innerHTML = "Algo no está funcionando: " + error;
        console.error(error);
    }
};

const getDataMoneda = async (moneda) => {
    const res = await fetch(`https://mindicador.cl/api/${moneda}`);
    const data = await res.json();
    const labels = data.serie.map(i => i.fecha).reverse().slice(-10);
    const valores = data.serie.map(i => i.valor).reverse().slice(-10);
    return { labels, valores };
};

const renderMoneda = async (valor, moneda, nombreMoneda) => {
    try {
        const valorMoneda = await getValorMoneda(moneda);
        const conversion = valor / valorMoneda;
        resultado.innerHTML = `<p>${nombreMoneda}: <b>$ ${conversion.toFixed(2)}</b></p>`;
        await renderGraficaMoneda(moneda, `${nombreMoneda} observado`);
    } catch (error) {
        console.error(error);
    }
};

const renderGraficaMoneda = async (moneda, label) => {
    const { labels, valores } = await getDataMoneda(moneda);

    if (miGraf) miGraf.destroy();

    const grafDOM = document.querySelector("#grafica");
    grafDOM.style.backgroundColor = "white";

    miGraf = new Chart(grafDOM, {
        type: "line",
        data: {
            labels,
            datasets: [{
                label,
                backgroundColor: "red",
                borderColor: "blue",
                data: valores
            }]
        }
    });
};

boton.addEventListener("click", () => {
    const valor = Number(input.value);
    const moneda = document.querySelector("#moneda").value;

    if (moneda === "dolar") renderMoneda(valor, "dolar", "Dólares");
    if (moneda === "euro") renderMoneda(valor, "euro", "Euros");
    if (moneda === "bitcoin") renderMoneda(valor, "bitcoin", "Bitcoins");
});
