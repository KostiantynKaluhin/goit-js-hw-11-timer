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
}
