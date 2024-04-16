function timingCalc(endtime) {
    const timeTotal = Date.parse(endtime) - Date.parse(new Date());
    const timeSeconds = Math.floor((timeTotal / 1000) % 60);
    const timeMinutes = Math.floor((timeTotal / 1000 / 60) % 60);
    const timeHours = Math.floor((timeTotal / (1000 * 60 * 60)) % 24);
    const timeDays = Math.floor(timeTotal / (1000 * 60 * 60 * 24));

    console.log(`${timeDays} days, ${timeHours} hours, ${timeMinutes} minutes, ${timeSeconds} seconds`);
}

const deadline = '2024-01-10 00:00:00';
timingCalc(deadline);