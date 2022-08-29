const relogio = document.querySelector("div.relogio span")

const renderizarRelogio = () => {
    const hora = new Date()
    relogio.innerHTML = ("0" + hora.getHours()).slice(-2) + ":"
    + ("0" + hora.getMinutes()).slice(-2) + ":"
    + ("0" + hora.getSeconds()).slice(-2)
}

setInterval(() => {
    renderizarRelogio()
}, 1000)