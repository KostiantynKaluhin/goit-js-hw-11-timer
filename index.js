class Countdown {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.deltaTime = 0;
    this.days = this.selector.querySelector('[data-value="days"]');
    this.hours = this.selector.querySelector('[data-value="hours"]');
    this.mins = this.selector.querySelector('[data-value="mins"]');
    this.secs = this.selector.querySelector('[data-value="secs"]');
  }

  beginning() {
    this.style();
    setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.targetDate - currentTime;
      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      );
      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
      this.updateTimer(days, hours, mins, secs);
    }, 1000);
  }
  style() {
    this.selector.style.display = 'flex';
    this.selector.style.alignItems = 'center';
    this.selector.style.justifyContent = 'center';
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  updateTimer(days, hours, mins, secs) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
  }
}
const SummerTime = new Countdown({
  selector: '#timer-1',
  targetDate: new Date('June 01,2022'),
});
SummerTime.beginning();
