/* Kata "Everything Is Even" on: 
https://www.codewars.com/kata/59c0cdbd5fb133c82b00007d */

// solution:

function hasDecimals(n) {
    if (n % 1 !== 0) {
      return true;
    }
    
    return false;
  }
  
  function isEven(n) {
    if (n % 2 === 0) {
      return true;
    }
    
    return false;
  }
  
  function isPositive(n) {
    if (n > 0) {
      return true;
    }
    
    return false;
  }
  
  function ensureEven(n) {
    if (n === 0) {
      return 0;
    }
    
    let output = n;
    
    if (hasDecimals(output)) {
      output = Math.round(n, 0);
    }
    
    if (! isEven(output)) {
      if (isPositive(output)) {
        output += 1;
      } else {
        output -= 1;
      }
    }
    
    return output;
  }

  /* Kata "All Star Code Challenge #3" on:
  https://www.codewars.com/kata/58640340b3a675d9a70000b9 */

//   solution:

var removeVowels = function(str){
    const arr = str.split('')
    
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === 'a'){
        arr[i] = ''
      }else if (arr[i] === 'e'){
        arr[i] = ''
      }else if (arr[i] === 'i'){
        arr[i] = ''
      }else if (arr[i] === 'o'){
        arr[i] = ''
      }else if (arr[i] === 'u'){
        arr[i] = ''
      }
    }
    
    const newString = arr.join('')
    return newString;
  }

  