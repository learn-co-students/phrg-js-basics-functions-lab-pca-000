// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  let hq = 42
  if (hq > blocks){
    return hq - blocks
  }
  else {
    return blocks - hq
  }
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, finish){
  if (start > finish){
    return ((start - finish)*264)
  }
  else {
    return ((finish- start)*264)
  }
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
   if (distance <= 400){
    return 0
   }
   else if (distance > 400 && distance <= 2000){
    return (distance - 400) *.02
   }
   else if (distance > 2000 && distance < 2500){
    return 25
   }
   else {
    return "cannot travel that far"
   }
}
