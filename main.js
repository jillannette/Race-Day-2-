let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
let earlyRegistration = false;
let runnerAge = 57;

if (runnerAge >= 18 && earlyRegistration == true) {
  adultRaceNumber = raceNumber + 1000;
  console.log('Your race time is 9:30AM and your number is ' + adultRaceNumber);
} else if (runnerAge > 18 && earlyRegistration === false) {
  console.log(`'Your race time is 11:00AM and your number is ${raceNumber+1000}'`);
} else if (runnerAge < 18) {
  console.log('Your race time is 12:30PM and your number is ' + raceNumber);
};
