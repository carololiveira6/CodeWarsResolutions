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

  /* Kata "Get the Middle Character" on:
https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript */

//  solution:

function getMiddle(s)
{
  let middle = Math.floor((s.length)/2);
  if (s.length % 2 === 0) {
    return s[middle-1] + s[middle]
  } else {
    return s[middle]
  }
}

/* Kata "The Office II - Boredom Score" on:
https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript */

//  solution:

const boredomScore = {
  'accounts': 1,
  'finance': 2,
  'canteen': 10,
  'regulation': 3,
  'trading': 6,
  'change': 6,
  'IS': 8,
  'retail': 5,
  'cleaning': 4,
  'pissing about': 25
}

function boredom(staff){
  const teamScore = Object.values(staff)
    .map(department => boredomScore[department])
    .reduce((total, value) => total + value, 0)
  if (teamScore <= 80) return 'kill me now'
  if (teamScore < 100 && teamScore > 80) return 'i can handle this'
  return 'party time!!'
}