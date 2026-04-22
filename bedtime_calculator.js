export default class BedtimeCalculator {
  getBedTimeRange(age, wakeUpTime, naptime) {
    const { minimumSleepHours, maximumSleepHours } =
      this.#getSleepHoursRange(age);

    return {
      earliestBedTime: this.#getBedTime(wakeUpTime, maximumSleepHours, naptime),
      latestBedTime: this.#getBedTime(wakeUpTime, minimumSleepHours, naptime),
    };
  }

  #getSleepHoursRange(age) {
    const minimumSleepHours = this.#getMinimumSleepHours(age);
    const maximumSleepHours = this.#getMaximumSleepHours(age);
    return { minimumSleepHours, maximumSleepHours };
  }

  #getBedTime(wakeUpTime, sleepHours, napTime) {
    const bedTime = (wakeUpTime - (sleepHours - napTime) + 24) % 24;
    return bedTime;
  }

  #getMinimumSleepHours(age) {
    if (2 >= age) return 11;
    if (5 >= age) return 10;
    if (12 >= age) return 9;
    if (18 >= age) return 8;
    return 7;
  }

  #getMaximumSleepHours(age) {
    if (2 >= age) return 14;
    if (5 >= age) return 13;
    if (12 >= age) return 12;
    if (18 >= age) return 10;
    return 7;
  }
}
