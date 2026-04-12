#!/usr/bin/env node

import Cli from "./cli.js";
import BedtimeCalculator from "./bedtime_calculator.js";

const cli = new Cli();
const bedtimeCalculator = new BedtimeCalculator();

try {
  const age = await cli.getAge();
  const { earliestBedTime, latestBedTime } = bedtimeCalculator.getBedTimeRange(
    age,
    await cli.getWakeUpTime(),
    await cli.getNapTime(age),
  );

  cli.print(
    earliestBedTime === latestBedTime
      ? `${earliestBedTime}時までに就寝することが推奨されています。`
      : `${earliestBedTime}時から${latestBedTime}時の間に就寝することが推奨されています。`,
  );
} catch (error) {
  console.error("Error", error);
  process.exit(1);
}
