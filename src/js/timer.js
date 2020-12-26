// import refs from "./refs.js";
// const {
//   timer: timerRef,
//   days: daysRef,
//   hours: hoursRef,
//   minutes: minsRef,
//   seconds: secsRef,
// } = refs;

// let day = "Jan 1 2021";
// function timer(date) {
//   let targetDate = new Date(date);
//   let currentDate = Date.now();
//   let timeBetween = targetDate - currentDate;
//   let days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let mins = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
//   let secs = Math.floor((timeBetween % (1000 * 60)) / 1000);
//   daysRef.textContent = days;
//   hoursRef.textContent = hours;
//   minsRef.textContent = mins;
//   secsRef.textContent = secs;
// }

// setInterval(() => {
//   timer(day);
// }, 1000);

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;

    const daysRef = document.querySelector(`${selector} .value[data-value='days']`);
    const hoursRef = document.querySelector(`${selector} .value[data-value='hours']`);
    const minsRef = document.querySelector(`${selector} .value[data-value='mins']`);
    const secsRef = document.querySelector(`${selector} .value[data-value='secs']`);

    setInterval(() => {
      let currentDate = Date.now();
      let timeBetween = this.targetDate - currentDate;

      let days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((timeBetween % (1000 * 60)) / 1000);

      daysRef.textContent = days;
      hoursRef.textContent = hours;
      minsRef.textContent = mins;
      secsRef.textContent = secs;
      colorSwitch();
    }, 1000);
  }
}
const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2022"),
});
// Colorswitch
function colorSwitch() {
  const bodyRef = document.querySelector("body");
  console.dir(bodyRef.style);
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i = i + 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  bodyRef.style.color = getRandomColor();
}
