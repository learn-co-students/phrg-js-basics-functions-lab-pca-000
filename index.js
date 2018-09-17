// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  if (startingBlock >= endingBlock) {
    return (startingBlock - endingBlock) * 264;
  } else {
    return (endingBlock - startingBlock) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const rideDistanceInFeet = distanceTravelledInFeet(start, destination);
  const fare = (rideDistanceInFeet - 400) * .02

  if (rideDistanceInFeet <= 400) {
    return 0;
  } else if (rideDistanceInFeet > 400 && rideDistanceInFeet <= 2000) {
    return fare;
  } else if (rideDistanceInFeet >= 2000 && rideDistanceInFeet < 2500) {
    return 25;
  } else if (rideDistanceInFeet > 2500) {
    return 'cannot travel that far';
  }
}


// function scuberGreetingForFeet(rideLength) {
//   if (rideLength <= 400) {
//     return 'This one is on me!';
//   } else if (rideLength >= 2000 && rideLength < 2500) {
//     return 'I will gladly take your thirty bucks.';
//   } else
//     return 'No can do.';
// }
