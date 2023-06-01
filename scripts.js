const horas = document.elementByid('horas');
const minutos = document.elementByid('minutos');
const segundos = document.elementByid('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let secnds = dateToday.getSeconds();

    horas.textContent = hr;
    
})
