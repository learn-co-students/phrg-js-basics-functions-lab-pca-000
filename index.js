// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks > 42)
    return blocks - 42
  else {
    return 42 - blocks
  }
}

function distanceTravelledInFeet(beginning, destination) {
  if (destination > beginning) {
    return (destination - beginning) * 264
  }
  else {
    return (beginning - destination) * 264
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function calculatesFarePrice(beginning, destination) {
  const distance = distanceTravelledInFeet(beginning, destination);
  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000 ) {
    return .02 * (distance - 400);
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return "cannot travel that far"
  }
}



function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
   if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
