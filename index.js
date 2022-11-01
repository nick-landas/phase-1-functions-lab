// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    //returns the number of blocks given a value
    const HQ = 42;
    let difference = HQ - pickUp
    let numberOfBlocks = Math.abs(difference);
    return numberOfBlocks;
  }

  distanceFromHqInBlocks(pickup);

  function distanceFromHqInFeet(pickup) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
   // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(pickup) * 264;
    
    
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let feetTravelled = (start - destination) * 264;
    return Math.abs(feetTravelled);

  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let travelledFt  = distanceTravelledInFeet(start, destination);
    
    if (travelledFt <= 400) return 0;
    if (travelledFt > 400 && travelledFt <= 2000) return (travelledFt - 400) *.02;
    if (travelledFt >2000 && travelledFt<2500) return 25;
    return "cannot travel that far";
    }
