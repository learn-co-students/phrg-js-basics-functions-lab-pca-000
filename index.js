function distanceFromHqInBlocks(blockDistance) {
  let distance
  blockDistance >= 42 ? distance = blockDistance - 42 : distance = 42 - blockDistance;
  return distance
}

function distanceFromHqInFeet(feet) {
  let blocks = distanceFromHqInBlocks(feet)
  return blocks * 264
}

function distanceTravelledInFeet(start, destination) {
  let distance
  start >= destination ? distance = start - destination : distance = destination - start;
  return distance * 264
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
