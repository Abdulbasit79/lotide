const assertEqual = function(actual, expected) {

    if (actual === expected) {
      //console.log("✅ Assertion Passed: " + [actual] + " === " + [expected]);
      console.log(`✅ Assertion Passed: ${actual} ===  ${expected}`);
  
    } else if (actual !== expected) {
      console.log(`🛑 Assertion Failed: ${actual} !==  ${expected}`);
  
    }
  
  };
  
  
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    history: "Vikings",
    horror: "chucky",
    action: "Marvel's Avengers",
  };
  
  const findKeyByValue = function(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Vikings"), "history");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Fresh Prince of Bel-air"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, "chucky"), "horror"); 
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Martin"), undefined);