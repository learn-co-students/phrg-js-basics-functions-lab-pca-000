// Code your solution in this file!
function distanceFromHqInBlocks(startingBlock) {
  let distance
  startingBlock >= 42 ? distance = startingBlock - 42 : distance = 42 - startingBlock;
  return distance
}

function distanceFromHqInFeet(startingBlock) {
  let blocks = distanceFromHqInBlocks(startingBlock)
  return blocks * 264
}

function calculatesFarePrice(start, destination) {
  let totalFeet = distanceTravelledInFeet(start, destination)
  if (totalFeet <= 400) {
      return 0
  }
  else if (totalFeet > 400 && totalFeet <= 2000) {
    return (totalFeet - 400) * .02
  }
  else if (totalFeet > 2000 && totalFeet <= 2500) {
    return 25
  }
  else if (totalFeet > 2500) {
    return 'cannot travel that far'
  }

}

function distanceTravelledInFeet(start, destination) {
  let distance
  start >= destination ? distance = start - destination : distance = destination - start;
  return distance * 264
}
