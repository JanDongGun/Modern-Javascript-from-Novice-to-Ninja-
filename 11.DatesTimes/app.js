// dates & times

// const now = new Date();
// console.log(now);

// year, month, day, times

// console.log("getFullYear", now.getFullYear());
// console.log("getMonth", now.getMonth());
// console.log("getDate", now.getDate());
// console.log("getDay", now.getDay());

// timestamps

// console.log("timestamp", now.getTime());

// date strins
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// Comparisons

// const before = new Date("February 1 2019 7:30:59");
// const now = new Date();

// const diff = now.getTime() - before.getTime();

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(mins, hours, days);

const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${h} : </span>
    <span>${m} : </span>
    <span>${s}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
