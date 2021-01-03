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

    this.timerRef = document.getElementById(selector.slice(1));
    this.daysRef = document.querySelector(`${selector} .value[data-value='days']`);
    this.hoursRef = document.querySelector(`${selector} .value[data-value='hours']`);
    this.minsRef = document.querySelector(`${selector} .value[data-value='mins']`);
    this.secsRef = document.querySelector(`${selector} .value[data-value='secs']`);

    this.menuRef = document.querySelector(`${selector} form.menu`);
    this.startBtnRef = document.querySelector(`${selector} button.start`);
    this.stopBtnRef = document.querySelector(`${selector} button.stop`);
    this.clearBtnRef = document.querySelector(`${selector} button.clear`);
    this.createNewDateBtnRef = document.querySelector(`${selector} button.new-date`);
    this.createNewDateInptRef = document.querySelector(`${selector} input.new-date-inpt`);

    this.timerRef.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target === this.startBtnRef) {
        this.start();
      }
      if (event.target === this.stopBtnRef) {
        this.stop();
      }
      if (event.target === this.clearBtnRef) {
        this.clear();
      }
      if (event.target === this.createNewDateBtnRef) {
        this.createNewDate();
      }
    });
    this.menuRef.addEventListener("submit", (event) => {
      event.preventDefault();
      this.createNewDate();
    });
  }
  start() {
    this.startBtnRef.disabled = "disabled";
    this.init();
    this.timerIntervalId = setInterval(() => {
      this.init();
    }, 1000);
  }
  stop() {
    this.startBtnRef.disabled = "";
    clearInterval(this.timerIntervalId);
  }
  clear() {
    this.startBtnRef.disabled = "";
    clearInterval(this.timerIntervalId);
    this.daysRef.textContent = "";
    this.hoursRef.textContent = "";
    this.minsRef.textContent = "";
    this.secsRef.textContent = "";
  }
  createNewDate() {
    this.newDate = this.createNewDateInptRef.value;
    this.targetDate = new Date(this.newDate);
  }
  init() {
    this.currentDate = Date.now();
    this.timeBetween = this.targetDate - this.currentDate;

    this.days = Math.floor(this.timeBetween / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((this.timeBetween % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.timeBetween % (1000 * 60)) / 1000);

    this.daysRef.textContent = this.days;
    this.hoursRef.textContent = this.hours;
    this.minsRef.textContent = this.mins;
    this.secsRef.textContent = this.secs;
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(`Jan 1, ${new Date(Date.now()).getFullYear() + 1} 00:00:00`),
});

timer1.start();
