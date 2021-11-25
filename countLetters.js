const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} ===  ${expected}`);
    } else if (actual !== expected) {
      console.log(`🛑Assertion Failed: ${actual} !==  ${expected}`);
    }
  };
  
  const counter = function(sentence, letter) {
    let letterCount = 0;
    for (let position = 0; position < sentence.length; position++) {
      if (sentence.charAt(position) === letter) {
        letterCount += 1;
      }
    }
    return letterCount;
  };
  
  const countLetter = function(string) {
    let result = {};
    let str = '';
    str = string.replace(/ /g, "");
    for (let i = 0; i < str.length; i++) {
      
      result[str[i]] = counter(str, str[i]);
    }
    return result;
  };
  
  const result = countLetter("lighthouse in the house")
  
  assertEqual(result["l"], 1);
  assertEqual(result["h"], 4);
  assertEqual(result["e"], 3);