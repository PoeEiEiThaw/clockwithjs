setInterval(setClock,1000);
const secondhand = document.querySelector('.hand.second');
const minutehand = document.querySelector('.hand.minute');
const hourhand = document.querySelector('.hand.hour');
function setClock(){
    const currentdate = new Date();
    const secondratio = currentdate.getSeconds()/60;
    const minuteratio = (secondratio + currentdate.getMinutes())/60;
    const hourratio = (minuteratio + currentdate.getHours())/12;

    secondhand.style.setProperty("--rotation",secondratio*360);
    minutehand.style.setProperty("--rotation",minuteratio*360);
    hourhand.style.setProperty("--rotation",hourratio*360);
}
setClock();


