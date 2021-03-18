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

/* Kata "Add property to every object in array" on:
https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/ */

//  solution:

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

/* Kata "Add property to every object in array" on:
https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/ */

//  solution:

questions.forEach(function (elem) {
  elem.usersAnswer = null;
});

/* Kata "Monkey Tennis - The Aftermath" on:
https://www.codewars.com/kata/5a0c5b3206d5b696940000b8/ */

//  solution:

function ballCollector(detritus) {
  
  let sack = detritus.filter(function (elem) {
    if (elem === 58) {
      return elem
    }
  })
  let weight = sack.length * 58
  let obj = {
    'weight': weight 
  }
  return obj
}

/* Kata "Filling an array (part 1)" on:
https://www.codewars.com/kata/571d42206414b103dc0006a1/ */

//  solution:

const arr = N => {
  const arr = [];
 
 for (let i = 0; i < N; i++) {
   arr.push(i);
 }
 
 return arr;
};

/* Kata "Highest and Lowest" on: 
https://www.codewars.com/kata/554b4ac871d6813a03000035/ */

//  solution:

function highAndLow(numbers) {
  
  const newNumbers = numbers.split(" "); // retorna as substrings de numbers
  let maxNumber = newNumbers[0]; // variável com valor do primeiro índice de newNumbers
  let minNumber = newNumbers[0]; // variável com valor do primeiro índice de newNumbers
  
  for (let num of newNumbers) { // A cada iteração, um valor de uma propriedade diferente é atribuido à num.
    // Number() converte o objeto, no caso "num" para número
    if (Number(num) > maxNumber) {
      maxNumber = num;
    }
    
    if (Number(num) < minNumber) {
      minNumber = num;
    }
    
  }
  
  return maxNumber + " " + minNumber
}

/* Kata "Whose bicycle?" on:
https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript */

//  solution:



/* Kata "" on: 
 */