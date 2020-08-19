const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0'+Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0'+Math.floor((remainTime / 60) % 60)).slice(-2),
        remainHours = ('0'+Math.floor((remainTime / 3600) % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
    }
};

// console.log(getRemainTime('Aug 20 2020 10:10:24 GMT-0300'));

const countDown = (deadline, element, finalMessage ) => {
    const elem = document.querySelector(element);

    const timerUpdate = setInterval( () => {
        let tiempo = getRemainTime(deadline);
        elem.innerHTML = `
            <div class="dias">${tiempo.remainDays}</div>
            <div class="horas">${tiempo.remainHours}</div>
            <div class="minutos">${tiempo.remainMinutes}</div>
            <div class="segundos">${tiempo.remainSeconds}</div>
        `;
        if( tiempo.remainTime <= 1){
            clearInterval(timerUpdate);
            elem.innerHTML = finalMessage;
        }
    }, 1000);
};

window.addEventListener("DOMContentLoaded", () => {
    countDown('Dec 31 2020 23:59:59 GMT-0300',".countdown","Feliz Año Nuevo");
});
