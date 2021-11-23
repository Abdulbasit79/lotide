const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑�Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  let tail = function(array) {
    return array.slice(1);
  };
  
  
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  assertEqual(result.length, 2); // ensure we get back two elements