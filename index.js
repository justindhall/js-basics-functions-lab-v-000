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
    return false;
  }
    else{
      return true;
    }
}

function calculatesFarePrice(pickupLocation, dropoffLocation){
  
  const distance = distanceTravelledInFeet(pickupLocation, dropoffLocation);
  
  if (validFare(distance) === false){
    return 'That trip is too far!'; 
  }
  
    else if (distance < 400){
      return 0;
    }
    
    else if (distance > 400 && distance <= 2000) {
      return .02*distance;
    }
    
    else {
      return 25; 
    }
}
