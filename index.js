// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  const distanceInBlocks = Math.abs(42 - destination);
  return distanceInBlocks;
}

function distanceFromHqInFeet(destination) {
  const distanceInFeet = distanceFromHqInBlocks(destination) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(beginning, end) {
  const distanceTravelled = Math.abs(end - beginning) * 264;
  return distanceTravelled;
}

function calculatesFarePrice(beginning, end) {
  const distance = distanceTravelledInFeet(beginning, end);
  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400) * .02;
  } else {
    return 0;
  }
}
