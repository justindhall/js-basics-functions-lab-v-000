// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
  
  return Math.abs(42-pickupLocation);
  
}

function distanceFromHqInFeet(pickupLocation){
  
  return distanceFromHqInBlocks(pickupLocation) * 264;
  
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation){
  
  return Math.abs(pickupLocation - dropoffLocation) * 264;
  
}

function validFare(distance){
  
  if(distance > 2500){
    return true;
    else{
      return false;
    }
  }
  
}

function calculatesFarePrice(pickupLocation, dropoffLocation){
  
  
  
}
