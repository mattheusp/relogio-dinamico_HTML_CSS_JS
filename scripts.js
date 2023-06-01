const horas = document.elementByid('horas');
const minutos = document.elementByid('minutos');
const segundos = document.elementByid('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let scdns = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) hr = '0' + min;

    if (scnds < 10) hr = '0' + scnds;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContet - scdns;
})
