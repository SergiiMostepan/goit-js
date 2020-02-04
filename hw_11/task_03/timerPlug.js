export default class Timer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.days = this.selector.querySelector('span[data-value="days"]');
    this.hours = this.selector.querySelector('span[data-value="hours"]');
    this.mins = this.selector.querySelector('span[data-value="mins"]');
    this.secs = this.selector.querySelector('span[data-value="secs"]');
  }

  start() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = new Date(deltaTime);
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      );
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      this.updateClockFase(days, hours, mins, secs);
      // console.log(`days: ${days} hours: ${hours} mins: ${mins} secs: ${secs}`)
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateClockFase(days, hours, mins, secs) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }
}
