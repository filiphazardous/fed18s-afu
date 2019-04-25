/* global driversOnShift, driversBusy, time, respond */

/*
 * Övning 3:
 * Skriv om koden nedan så att vi undviker onödiga upprepningar
 */

function cabDaytimeResponse() {
  if (driversOnShift() - driversBusy() > 0 && time > 6 && time < 22) {
    respond('Cab will be around in 10 minutes');
  } else {
    respond('We are sorry, but there are no available cars near you');
  }
}

function cabNighttimeResponse() {
  if (driversOnShift() - driversBusy() > 0 && (time >= 22 || time <= 6)) {
    respond('Cab will be around in 5 minutes');
  } else {
    respond('We are sorry, but there are no available cars near you');
  }
}

function callCab() {
  cabDaytimeResponse();
  cabNighttimeResponse();
}

callCab();
