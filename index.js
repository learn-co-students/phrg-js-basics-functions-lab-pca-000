function distanceFromHqInBlocks(blockNumber) {
  let distanceInBlocks = Math.abs(blockNumber - 42)
  return distanceInBlocks
}

 function distanceFromHqInFeet(blockNumber) {
  let distanceInFeet = (distanceFromHqInBlocks(blockNumber) * 264)
  return distanceInFeet
}

 function distanceTravelledInFeet(startingBlock, endingBlock) {
  let distanceInFeet = Math.abs(startingBlock - endingBlock) * 264
  return distanceInFeet
}

 function calculatesFarePrice(startingBlock, endingBlock) {
  let distanceInFeet = distanceTravelledInFeet(startingBlock, endingBlock)
  let fare
  if (distanceInFeet < 400) {
    fare = 0
    return fare
  }
  else if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
    fare = (distanceInFeet - 400) * 0.02
    return fare
  }
  else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    fare = 25
    return fare
  }
  else {
    tooFarMessage = "cannot travel that far"
    return tooFarMessage
  }
}
