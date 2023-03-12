const hours = document.querySelectorAll("#hours");
const minutes = document.querySelectorAll("#minutes");
const second = document.querySelectorAll("#second");
const times = document.querySelector(".time");
const years = document.querySelector(".year");
const months = document.querySelector(".month");
const days = document.querySelector(".day");

const time = () => {
  const date = new Date();
  let hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let time = date.getHours() >= 12 ? "PM" : "AM";
  const year =
    date.getFullYear() < 10 ? "0" + date.getFullYear() : date.getFullYear();
  const month =
    date.getUTCMonth() < 10 ? "0" + date.getUTCMonth() : date.getUTCMonth();
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  times.textContent = time;
  hours[0].style.transform = `rotateZ(${hh * 30 + mm / 12}deg)`;
  minutes[0].style.transform = `rotateZ(${mm * 6}deg)`;
  second[0].style.transform = `rotateZ(${ss * 6}deg)`;
  hours[1].textContent = hh;
  minutes[1].textContent = mm;
  second[1].textContent = ss;
  years.textContent = year;
  months.textContent = month;
  days.textContent = day;
};
setInterval(time, 1000);
