console.log("holis")
var dias = document.getElementById("dias")
var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")

var countDate = new Date('Aug 20,2023 00:00:00').getTime();
let Interval = setInterval(function(){
    const ahora = new Date().getTime();
    //distancia entre fechas
    let distance = countDate - ahora;
    //calculo días
    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((distance%(1000*60*60))/(1000*60))
    let seconds = Math.floor((distance%(1000*60))/1000)
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    dias.innerHTML = days;
    horas.innerHTML = ('0'+ hours).slice(-2);
    minutos.innerHTML = ('0'+ minutes).slice(-2);
    segundos.innerHTML = ('0'+ seconds).slice(-2);
},1000)
