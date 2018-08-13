// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
      return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(blockStart, blockEnd) {
  if (blockStart < blockEnd) {
    return (blockEnd - blockStart) * 264
  } else {
    return (blockStart - blockEnd) * 264
  }
}

function calculatesFarePrice(blockStart, blockEnd) {
  const travel = distanceTravelledInFeet(blockStart, blockEnd)
  if (travel <= 400) {
    return 0
  } else if (travel <= 2000) {
    return 2.56
  } else if (travel <= 2499) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
