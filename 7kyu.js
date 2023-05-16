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

//  solution 1:

questions.forEach(function (elem) {
  elem.usersAnswer = null;
});

//  solution 2:

for (let i = 0; i < questions.length; i++) {
  questions[i].usersAnswer = null;
}

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

//  solution 1:

const arr = N => {
  const arr = [];
 
 for (let i = 0; i < N; i++) {
   arr.push(i);
 }
 
 return arr;
};

//  solution 2:

const arr = N => {
  let output = [];
  
  for (let i = 0; i < N; i++) {
    output.push(i);
  }
  return output;
}

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
https://www.codewars.com/kata/5a2cb4bff28b820c33000082/ */

//  solution:

function somaNotas(obj) {
  let output = 0;
  
  for (let materia in obj) {
    output += obj[materia];
  }
  
  return output;
}

function pegaMaior(n1, n2, n3) {
  let arr = [n1, n2, n3];
  let output = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > output) {
      output = arr[i];
    }
  }
    
  return output;
}

function whoseBicycle(diary1, diary2, diary3) {
  let output = "first";
  
  let nota1 = somaNotas(diary1);
  let nota2 = somaNotas(diary2);
  let nota3 = somaNotas(diary3);

  let maior = pegaMaior(nota1, nota2, nota3);
  
  if (nota1 === maior) {
    output = "first";
  }
  
  if (nota2 === maior) {
    output = "second";
  }
  
  if (nota3 === maior) {
    output = "third";
  }
  return `I need to buy a bicycle for my ${output} son.`;
}

/* Kata "Jaden Casing Strings" on: 
https://www.codewars.com/kata/5390bac347d09b7da40006f6/ */

//  solution:

String.prototype.toJadenCase = function () {
  let words = this.split(" ");
  let output = [];
  
  for (let i = 0; i < words.length; i++) {
    let palavra = words[i];
    let primeiraLetra = palavra[0];
    let restanteDaPalavra = palavra.substring(1);
    
    let novaPalavra= primeiraLetra.toUpperCase() + restanteDaPalavra;
    output.push(novaPalavra);
  }
  return output.join(" ");
};

/* Kata "Round up to the next multiple of 5" on:
https://www.codewars.com/kata/55d1d6d5955ec6365400006d/ */

//  solution:

function roundToNext5(n){
  let output = Math.floor(n / 5);
  
  if (n % 5 !== 0) {
    output++;
  }
  return output * 5;
}

/* Kata "What dominates your array?" on:
https://www.codewars.com/kata/559e10e2e162b69f750000b4/ */

//  solution:

function dominator(arr) {
    
  let numerosUnicos = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    
    if (!numerosUnicos.includes(item)) {
      numerosUnicos.push(item);
    }
  }
  
  let arrContagem = [];
  for (let i = 0; i < numerosUnicos.length; i++) {
    let contarAgora = numerosUnicos[i];
    let contagem = 0
    
    for (let j = 0; j < arr.length; j++) {
      let item = arr[j];
      
      if (item === contarAgora) {
        contagem++;
      }
    }
    
    if (contagem > Math.floor(arr.length / 2)) {
      return contarAgora;
    }
    
  }
  
  return -1;
}

/* Kata "Two fighters, one winner." on:
https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/ */

//  solution:

function declareWinner(fighter1, fighter2, firstAttacker) {
  let currentAttackerName = firstAttacker;
  let currentAttacker = fighter1;
  let currentVictim = fighter2;
  
  if (currentAttackerName === fighter2.name) {
    currentAttacker = fighter2;
    currentVictim = fighter1;
  }
  
  while (fighter1.health > 0 && fighter2.health > 0) {
    currentVictim.health -= currentAttacker.damagePerAttack;
    
    if (currentVictim.health <= 0) {
      return currentAttacker.name;
    }
    
    let temp = currentAttacker;
    currentAttacker = currentVictim
    currentVictim = temp;
  }
}

/* Kata "Job Matching #2" on:
https://www.codewars.com/kata/56c2578be8b139bd5c001bd8 */

//  solution:

function hasEquityMatch(job, candidate) {
  let output = false;
  
  if (
  (job.equityMax > 0 && candidate.desiresEquity === true)
  ||
  (candidate.desiresEquity === false)
  ) {
    output = true;
  }
  
  return output;
}

function hasLocationMatch(job, candidate) {
  for (let i = 0; i < job.locations.length; i++) {
    let jobLocation = job.locations[i];
    
    if (jobLocation === candidate.currentLocation || candidate.desiredLocations.includes(jobLocation)) {
      return true;
    }
  }
  
  return false;
}

function match(job, candidates) {
  let output = [];
  
  for (let i = 0; i < candidates.length; i++) {
    let candidate = candidates[i];
    
    if (hasEquityMatch(job, candidate) && hasLocationMatch(job, candidate)) {
      output.push(candidate);
    }
  }
  return output;
}

/* Kata "Sum of Minimums!" on:
https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/ */

//  solution:

function getMenorValor(arr) {
  let output = arr[0];
  
  if (arr.length < 2) {
    return output;
  }
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < output) {
      output = arr[i];
    }
  }
  
  return output;
}

function sumOfMinimums(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i];
    let menor = getMenorValor(currentArr);
    sum += menor;
  }
  
  return sum;
}

/* Kata "The Office I - Outed" on: 
https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/ */

//    solution:

function outed(meet, boss){
  let totalSum = 0
  for (const key in meet) {
      if ( key === boss) {
          totalSum += meet[key] * 2
      } else {
          totalSum += meet[key]
      }
  }
  
  debugger
      let result = Math.ceil(totalSum / Object.values(meet).length)
      
      if (result <= 5) {
        return 'Get Out Now!'
      } else {
        return 'Nice Work Champ!'
      }
    }

/* Kata "You Can't Code Under Pressure #2" on:
https://www.codewars.com/kata/5546ea9bddfc5c0c38000026/ */

//  solution:

class Counter {
  
  constructor() {
    this.counter = 0
  }
  
  check() {
    return this.counter
  }
 
  increment() {
   this.counter++
  }
  
};

/* Kata "Largest pair sum in array" on:
https://www.codewars.com/kata/556196a6091a7e7f58000018/ */

//  solution:

function largestPairSum(numbers){
  const newNumbers = numbers.sort( function (a, b) {
      return b - a
  })
  let sum = newNumbers[0] + newNumbers[1];
  return sum
}

/* Kata "All unique" on:
https://www.codewars.com/kata/553e8b195b853c6db4000048/ */

//  solution:

function hasUniqueChars(str){
  let items = [];
  
  for (let i = 0; i < str.length; i++) {
    if (! items.includes(str[i])) {
      items.push(str[i]);
    }
  }
  
  if ( items.length === str.length) {
    return true;
  }
  
  return false;
}

/* Kata "makeAcronym" on:
https://www.codewars.com/kata/557efeb04effce569d000022/ */

//  solution:

const isString = (str) => {
  return typeof str === 'string';
};

const hasOnlyLetterAndSpaces = (str) => {
  let re = new RegExp('^[A-Za-z ]*$', 'g');
  return re.test(str);
}

const makeAcronym = (string) => {
  if (!isString(string)) {
    return "Not a string";
  }
  
  if (!hasOnlyLetterAndSpaces(string)) {
    return "Not letters";
  }
  
  return string
    .split(' ')
    .map((item) => item.toUpperCase())
    .map((item) => item.split('').shift())
    .join('')
}

/* Kata "Split The Bill" on:
https://www.codewars.com/kata/5641275f07335295f10000d0/ */

//  solution:

function splitTheBill(x) {
  
  let total = 0;
  
  Object.keys(x).forEach(function(key) {
    total += x[key];
  });
  
  let average = total / (Object.keys(x).length);
  
  let result = {};
  Object.keys(x).forEach(function(key) {
    result[key] = Number((x[key] - average).toFixed(2));
  });
  
  return result;
}

/* Kata "Daily Calorie Requirement" on:
https://www.codewars.com/kata/5a088d8e80171fcd8800006b/ */

//  solution:

function calorie ([name, gender, age, heigth, weight, activity]){
  
  let soma = 0;
  let result;
      
  if (gender === "f" && activity === "little activity") {
    soma += (10 * weight + 6.25 * heigth - 5 * age - 161) * 1.2;
  }
  
  if (gender === "f" && activity === "moderately active") {
    soma += (10 * weight + 6.25 * heigth - 5 * age - 161) * 1.55;
  }
  
  if (gender === "f" && activity === "very active") {
    soma += (10 * weight + 6.25 * heigth - 5 * age - 161) * 1.7;
  }
  
  if (gender === "f" && activity === "extremely active") {
    soma += (10 * weight + 6.25 * heigth - 5 * age - 161) * 1.9;
  }
  
  if (gender === "m" && activity === "little activity") {
    soma += (10 * weight + 6.25 * heigth - 5 * age + 5) * 1.2;
  }
  
  if (gender === "m" && activity === "moderately active") {
    soma += (10 * weight + 6.25 * heigth - 5 * age + 5) * 1.55;
  }
  
  if (gender === "m" && activity === "very active") {
    soma += (10 * weight + 6.25 * heigth - 5 * age + 5) * 1.7;
  }
  
  if (gender === "m" && activity === "extremely active") {
    soma += (10 * weight + 6.25 * heigth - 5 * age + 5) * 1.9;
  }

  result = `${name}´s daily calorie requirement is ${(Math.round(soma * 100) / 100).toFixed(2)} kcal.`


return result;
}

/* Kata "Vowel Count" on:
https://www.codewars.com/kata/54ff3102c1bad923760001f3/ */

//  solution:

function getCount(str) {
  let vowelsCount = 0;
  let newStr = str.split('');
  
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === 'a') {
      vowelsCount += 1
    }
    
    if (newStr[i] === 'e') {
      vowelsCount += 1
    }
    
    if (newStr[i] === 'i') {
      vowelsCount += 1
    }
    
    if (newStr[i] === 'o') {
      vowelsCount += 1
    }
    
    if (newStr[i] === 'u') {
      vowelsCount += 1
    }
  }
  
  return vowelsCount;
}

/* Kata "Disemvowel Trolls" on:
https://www.codewars.com/kata/52fba66badcd10859f00097 */

//  solution:

function disemvowel(str) {
  
  let newStr = str.split('');
  
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === 'a' || newStr[i] === 'A') {
      newStr[i] = ''
    }
    
    if (newStr[i] === 'e' || newStr[i] === 'E') {
      newStr[i] = ''
    }
    
    if (newStr[i] === 'i' || newStr[i] === 'I') {
      newStr[i] = ''
    }
    
    if (newStr[i] === 'o'|| newStr[i] === 'O') {
      newStr[i] = ''
    }
    
    if (newStr[i] === 'u' || newStr[i] === 'U') {
      newStr[i] = ''
    }
  }
  
  return newStr.join('');
}

/* Kata "The Lazy Startup Office" on:
https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1/javascript */

// solution:

function binRota(staff){

  let finalArray = [];
  for (let i = 0; i < staff.length; i++) {
    if (i % 2 !== 0) {
      finalArray = finalArray.concat(staff[i].reverse());
    } else {
      finalArray = finalArray.concat(staff[i])
    }
  }
  return finalArray
}
