  const blockFt = 264
  const hqBlock = 42

function distanceFromHqInBlocks(destination) {
  let travel = Math.abs(destination - hqBlock);
  return travel;
}

function  distanceFromHqInFeet(street){
  let distance = distanceFromHqInBlocks(street) * blockFt ;
  return distance;
}

function distanceTravelledInFeet(start, destination) {
  let aToB = Math.abs((start - destination) * blockFt);
  return aToB;
}

function calculatesFarePrice(start, destination) {
  let trek = distanceTravelledInFeet(start, destination)
  if (trek <= 400) {
    return 0
  }
  else if (trek > 400 && trek <= 2000) {
    return (trek - 400) * 0.02
  }
  else if (trek > 2000 && trek <= 2500) {
    return 25
  }
  else if (trek > 2500) {
    return 'cannot travel that far'
  }
}
