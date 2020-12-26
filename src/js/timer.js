import refs from "./refs.js";
const {
  timer: timerRef,
  days: daysRef,
  hours: hoursRef,
  minutes: minsRef,
  seconds: secsRef,
} = refs;

let day = "Jan 1 2021";
function timer(date) {
  let targetDate = new Date(date);
  let currentDate = Date.now();
  let timeBetween = targetDate - currentDate;
  let days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((timeBetween % (1000 * 60)) / 1000);
  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minsRef.textContent = mins;
  secsRef.textContent = secs;
}

setInterval(() => {
  timer(day);
}, 1000);
