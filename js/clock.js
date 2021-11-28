const c1 = document.querySelector(".clockBox .c1");
const c2 = document.querySelector(".clockBox .c2");
const d1 = document.querySelector(".clockBox .d1");
const d2 = document.querySelector(".clockBox .d2");

function whenIsThis(nowHour) {
    if (nowHour <= 12 && nowHour >= 6) {
        return "오전";
    } else if (nowHour >= 12 && nowHour < 22) {
        return "오후";
    } else if (nowHour >= 22 && nowHour <= 24) {
        return "밤";
    } else {
        return "새벽";
    }
}

function getClock() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const dayName = today.toLocaleDateString('ko-KR', {
        weekday: 'long',
    });

    c2.innerText = `(${whenIsThis(hours)})`;
    c1.innerText = `${hours}:${minutes}:${seconds}`;
    d1.innerText = dateString;
    d2.innerText = `(${dayName})`;
}

getClock();
setInterval(getClock, 1000);
