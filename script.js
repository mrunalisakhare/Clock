const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".sec");

function updateClock() {

    const currenDate = new Date();

    const hour = currenDate.getHours();
    const minute = currenDate.getMinutes();
    const second = currenDate.getSeconds();

    const hourdeg = (hour / 12) * 360;
    hours.style.transform = `rotate(${hourdeg}deg) `;

    const minutedeg = (minute / 60) * 360;
    minutes.style.transform = `rotate(${minutedeg}deg) `;

    const seconddeg = (second / 60) * 360;
    seconds.style.transform = `rotate(${seconddeg}deg) `;
}

setInterval(updateClock, 1000)