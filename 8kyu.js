/* Kata "Get Planet Name By ID" on:
https://www.codewars.com/kata/515e188a311df01cba000003 */

// solution:

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      return 'Mercury'
    case 2:
      return 'Venus'
    case 3:
      return 'Earth'
    case 4:
      return 'Mars'
    case 5:
      return 'Jupiter'
    case 6:
      return 'Saturn'
    case 7:
      return 'Uranus'
    case 8:
      return 'Neptune'
  }
  
  return name;
}

/* Kata "Function 1 - hello world" on:
https://www.codewars.com/kata/523b4ff7adca849afe000035 */

// solution:

// Write a function "greet" that returns "hello world!"
function greet(){
  return "hello world!"

}

/* Kata "Array plus array" on:
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151 */

//   solution:

function arrayPlusArray(arr1, arr2) {
  var soma = 0;
  for(let i = 0; i < arr1.length; i++)
    soma += arr1[i];
  for (let i=0; i < arr2.length; i++)
    soma += arr2[i];
  return soma;
}

/* Kata "Total amount of points" on:
https://www.codewars.com/kata/5bb904724c47249b10000131 */

//   solution: 

function points(games) {
  let pontos = 0
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      pontos = pontos + 3
    } 
    if (games[i][0] === games[i][2]) {
      pontos = pontos + 1
    }
  }
  return pontos
}

/* Kata "SpeedCode #2 - Array Madness" on:
https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1 */

//   solution:

function arrayMadness(a, b) {
  let aSoma = 0
  let bSoma = 0
  for (let i = 0; i < a.length; i++) {
    aSoma = aSoma + a[i]**2
  }
  for (let j = 0; j < b.length; j++) {
    bSoma = bSoma + b[j]**3
  }
  if (aSoma > bSoma) {
    return true
  } else {
    return false
  }
}

/* Kata "Is it a palindrome?" on:
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4 */

//   soluttion:

function isPalindrome(x) {
  x = x.toLowerCase()
  for (let i = 0; i < x.length; i++) {
    let comeco = i
    let fim = (x.length -1) - i
    if (x[comeco] !== x[fim]) {
      return false
    }
  }
  return true
}

/* Kata "Beginner Series #2 Clock" on:
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a */

//   solution:

function past(h, m, s){
  return ((h * 3600000) + (m * 60000) + (s * 1000))
}

/* Kata "Multiply" on: 
https://www.codewars.com/kata/50654ddff44f800200000004 */

//   solution JavaScript:

function multiply(a, b){
  return a * b
}

/* Kata "How good are you really?" on:
https://www.codewars.com/kata/5601409514fc93442500010b */

//   solution:

function betterThanAverage(classPoints, yourPoints) {
  avgClass = 0
  for (let i = 0; i < classPoints.length; i++) {
    avgClass = avgClass + classPoints[i]
  }
  avgClass = avgClass / classPoints.length
  if (avgClass > yourPoints) {
    return false
  } else {
    return true
  }
}

/* Kata "You only need one - Beginner" on:
https://www.codewars.com/kata/57cc975ed542d3148f00015b */

//   solution:

function check(a, x) {
  let palavra = false
  for (let i = 0; i < a.length; i++)
  if (a[i] === x) {
    return true
  }
  return palavra
}

/* Kata "Grasshopper - Grade book" on:
https://www.codewars.com/kata/55cbd4ba903825f7970000f5 */

//   solution:

function getGrade (s1, s2, s3) {
  let arr = (s1 + s2 + s3)
  let i = arr/3
  if (i < 60 ) {
    return 'F'
  } else if (i < 70) {
    return 'D'
  } else if (i < 80) {
    return 'C'
  } else if (i < 90) {
    return 'B'
  } else {
    return 'A'
  }
}

/* Kata "You Can't Code Under Pressure #1" on:
https://www.codewars.com/kata/53ee5429ba190077850011d4 */

//   solution:

function doubleInteger(i) {
  i = i*2
  return i;
}

/* Kata "Invert values" on:
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad */

//   solution 1:

function invert(array) {
  return array.map(i => -i)
}

//   solution 2:

function invert(array) {
  
  let newArray = [];
  
   for (let i = 0; i < array.length; i++) {
       if (array[i] === 0) {
        newArray.push(array[i]);
       } else {
         newArray.push(array[i] * (-1));
       }
   }
  return newArray;
}

/* Kata "Is he gonna survive?" on: 
https://www.codewars.com/kata/59ca8246d751df55cc00014c */

//   solution:

function hero(bullets, dragons){
  if (bullets >= dragons * 2) {
    return true
  } else {
    return false
  }
}

/* Kata "Sum of positive" on:
https://www.codewars.com/kata/5715eaedb436cf5606000381 */

//   solution 1:

function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum
}

//  solution 2: 

function positiveSum(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > 0) {
      output += num;
    }
  }
  return output;
}

/* Kata "All Star Code Challenge #18" on:
https://www.codewars.com/kata/5865918c6b569962950002a1 */

//   solution:

function strCount(str, letter){  
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count = count + 1
    }   
  }
  return count
}

/* Kata "Grasshopper - Summation" on:
https://www.codewars.com/kata/55d24f55d7dd296eb9000030 */

//   solution:

var summation = function (num) {
  let contador = 0
  for (let i = 1; i <= num; i++) {
    contador += i

  }
  return contador
}

/* Kata "Unfinished Loop - Bug Fixing #1" on:
https://www.codewars.com/kata/55c28f7304e3eaebef0000da */

//   solution:

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}


/* Kata "Grasshopper - Check for factor" on:
https://www.codewars.com/kata/55cbc3586671f6aa070000fb */

//   solution:

function checkForFactor (base, factor) {
  return base % factor === 0
}

/* Kata "Will you make it?" on:
https://www.codewars.com/kata/5861d28f124b35723e00005e */

//   solution:

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump <= mpg * fuelLeft) {
    return true
  }
  else {
    return false
  }
}

/* Kata "Return Negative" on:
https://www.codewars.com/kata/55685cd7ad70877c23000102 */

//   solution:

function makeNegative(num) {
  if (num > 0) {
    return -num
  }
  if (num === 0) {
    return 0
  }
  else
    return num
}

/* Kata "Thinkful - Logic Drills: Traffic light" on:
https://www.codewars.com/kata/58649884a1659ed6cb000072 */

//   solution:

function updateLight(current) {

  if (current === 'green') {
    return 'yellow'
  }  else if (current === 'yellow') {
        return 'red'
} else (current === 'red')
    return 'green'
  
}

 /* Kata "Century From Year" on:
 https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097 */

//   solution:

function century(year) {
  var century = 0;
  
  for ( var i = 0; i < year; i++) {
    if (i % 100 == 0){
      century++;
    }   
  }
  return century;
}

  /* Kata "Grasshopper - Personalized Message" on:
  https://www.codewars.com/kata/5772da22b89313a4d50012f7 */

//   solution:

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss'
  }
  return 'Hello guest'
}

  /* Kata "Beginner Series #1 School Paperwork" on:
  https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd */

//   solution:

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  }
  return n * m
  
}

/* Kata "Grasshopper - Messi Goals" on:
https://www.codewars.com/kata/55ca77fa094a2af31f00002a */

//   solution:

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

/* Kata "Square(n) Sum" on:
https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript */

//  solution 1:

function squareSum(numbers){
let output = 0;

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  let squared = number * number;
  
  output += squared;
}
return output;
}

//  solution 2:

function squareSum(numbers){
  let output = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let squared = number ** 2
    output += squared
  }
  return output
}

/* Kata "Welcome!" on:
https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript */

//  solution: (falta código)

const languages = {
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}

function greet(language) {
let greeting = languages[language];

return greeting
}

/* Kata "I love you, a little , a lot, passionately ... not at all" on: 
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript */

//  solution 1:

function howMuchILoveYou(nbPetals) {
const options = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all'
];

let counter = 0
let output = '';
let discount = 0;

while (counter < nbPetals) {
  if (counter % options.length === 0 && counter > 0) {
    discount++;
  }
  
  output = options[counter - (discount * options.length)]
  counter++;
}

return output;
}

//  solution 2:

function howMuchILoveYou(nbPetals) {
const options = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all'
];
let index = (nbPetals - 1) % options.length
return options [index]
}

/* Kata "Do I get a bonus? " on:
https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript */

//  solution:

function bonusTime(salary, bonus) {
let valor = salary;

if (bonus === true) {
  valor = salary * 10;
}

let output = `£${valor}`;

return output;
}

/* Kata "Take the Derivative" on:
https://www.codewars.com/kata/5963c18ecb97be020b0000a2 */

//  solution 1:

function derive(coefficient,exponent) {

coefficient !== 0;
exponent !== 1 && exponent !== 0;

let result1 = 0
let result2 = 0
let resultadoFinal

result1 = coefficient * exponent;
result2 = exponent - 1;
resultadoFinal = result1 + "x^" + result2;
  
return resultadoFinal;

}

//  solution 2:

function derive(coefficient,exponent) {
  let multiply = coefficient * exponent
  let exp = exponent - 1
  
  let output = `${multiply}x^${exp}`
  
  return output
}

/* Kata "Find the first non-consecutive number" on:
https://www.codewars.com/kata/58f8a3a27a5c28d92e000144 */

//  solution:

function firstNonConsecutive(arr) {
for (let i = 1; i < arr.length; i++) {
  if (arr[i - 1] + 1 !== arr[i])
    return arr[i];
}
  return null;
}

/* Kata "Crash Override" on:
https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/solutions/javascript */

firstName = {
A: 'Alpha',
B: 'Beta',
C: 'Cache',
D: 'Data',
E: 'Energy',
F: 'Function',
G: 'Glitch',
H: 'Half-life',
I: 'Ice',
J: 'Java',
K: 'Keystroke',
L: 'Logic',
M: 'Malware',
N: 'Nagware',
O: 'OS',
P: 'Phishing',
Q: 'Quantum',
R: 'RAD',
S: 'Strike',
T: 'Trojan',
U: 'Ultraviolet',
V: 'Vanilla',
W: 'WiFi',
X: 'Xerox',
Y: 'Y',
Z: 'Zero',
}

surName = {
A: 'Analogue',
B: 'Bomb',
C: 'Catalyst',
D: 'Discharge',
E: 'Electron',
F: 'Faraday',
G: 'Gig',
H: 'Hacker',
I: 'IP',
J: 'Jabber',
K: 'Killer',
L: 'Lazer',
M: 'Mike',
N: 'n00b',
O: 'Overclock',
P: 'Payload',
Q: 'Quark',
R: 'Roy',
S: 'Spy',
T: 'T-Rex',
U: 'Unit',
V: 'Virus',
W: 'Worm',
X: 'X',
Y: 'Yob',
Z: 'Zombie',
}

const firstLetter = string => string[0].toUpperCase()

const isValidName = name => /[a-z]/gi.test(name)

const aliasGen = (fName, sName) =>
isValidName(fName[0]) && isValidName(sName[0])
  ? `${firstName[firstLetter(fName)]} ${surName[firstLetter(sName)]}`
  : 'Your name must start with a letter from A - Z.'


/* Kata "Regular Ball Super Ball" on:
https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript */

var Ball = function(ballType) {
if (!ballType){
  this.ballType = 'regular';
}
else {
  this.ballType= 'super';
}
}

/* Kata "Grasshopper - Terminal Game #1" on:
https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript */

//  solution:

class Hero {
  constructor (name) {
    this.name = name || "Hero";
    this.position = "00";
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}

/* Kata "Grasshopper - Create the rooms" on:
https://www.codewars.com/kata/56a29b237e9e997ff2000048/train/javascript */

const rooms = {
  firstRoom: {
    name: 'Room One',
    description: 'Easy',
    completed: true
  },
  secondRoom: {
    name: 'Room Two',
    description: 'Medium',
    completed: true
  },
  thirdRoom: {
    name: 'Room Third',
    description: 'Hard',
    completed: false
  }
}

/* Kata "Squash the bugs" on: 
https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript */

//  solution:

function findLongest(str) {
  
  let spl = str.split(" ");
  let longest = 0;
  
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

/* Kata "Grasshopper - Bug Squashing" on: 
https://www.codewars.com/kata/56214b6864fe8813f1000019/train/javascript */

//  solution:

let health = 100
let position = 0
let coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

/* Kata "Sum Arrays" on: 
https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript */

//  solution:

// Sum Numbers
function sum (numbers) {
  "use strict";
let result = 0;
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i]
}
return result
};

/* Kata "Sum Mixed Array" on:
https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript */

//  solution:

function sumMix(x){
  let result = 0;
  for (let num of x) {
    result += parseInt(num);
  }
  return result;
}

/* Kata "Smallest unused ID" on:
https://www.codewars.com/kata/55eea63119278d571d00006a/ */

//  solution:

function nextId(ids){
  let output = 0
  
  ids.sort(function(a, b) {return a - b});
  
  if (ids[0] !== 0) {
    return 0;
  }
  
  for (let i = 1; i < ids.length; i++) {
    let atual = ids[i];
    let anterior = ids[i - 1];
    
    if (atual !== (anterior + 1) && atual !== anterior) {
      return anterior + 1;
    }
  }
  
  let ultimo = ids[ids.length - 1];
  output = ultimo + 1;
  
  return output;
}

/* Kata "Remove String Spaces" on:
https://www.codewars.com/kata/57eae20f5500ad98e50002c5/ */

//  solution:

function noSpace(x){
  return x.split(' ').join('')
}

/* Kata "Check the exam" on:
https://www.codewars.com/kata/5a3dd29055519e23ec000074/ */

//  solution:

function checkExam(array1, array2) {
  let score = 0
  
 for (let i = 0; i < array1.length; i++) {
   if (array1[i] === array2[i]) {
     score += 4;
   } else if (array2[i] === "") {
     score += 0;
   } else {
     score -= 1;
   }
 }
  if (score < 0) {
    score = 0;
  }
  
  return score;
}

/* Kata "Can we divide it?" on:
https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/ */

//  solution:

function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true
  } else {
    return false
  }
}

/* Kata "Transpose two strings in an array" on:
https://www.codewars.com/kata/581f4ac139dc423f04000b99/train/javascript */

//  solution:

function transposeTwoStrings(arr){
  let output = [];
  
  let wordOne = arr[0];
  let wordTwo = arr[1];
  
  let tamanho = wordOne.length;
  
  if (wordTwo.length > tamanho) {
    tamanho = wordTwo.length;
  }
  
  for (let i = 0; i < tamanho; i++) {
    let letterOne = " ";
    let letterTwo = " ";
    
    if (wordOne[i] !== undefined) {
      letterOne = wordOne[i];
    }
    
    if (wordTwo[i] !== undefined) {
      letterTwo = wordTwo[i];
    }
    
    output.push(`${letterOne} ${letterTwo}`);
    
  }
  
  return output.join("\n");
}

/* Kata "Classy Classes" on:
https://www.codewars.com/kata/55a144eff5124e546400005a/ */

//  solution:

class Person {
  constructor(name, age) {
    this.name = 'john'
    this.age = 34
    this.info = `${name}s age is ${age}`
  }
}

/* Kata "Reversed Words" on:
https://www.codewars.com/kata/51c8991dee245d7ddf00000e/ */

//  solution:

function reverseWords(str){
  let result = str.split(" ").reverse().join(" ");
  return result;
}

/* Kata "Grasshopper - Debug" on:
https://www.codewars.com/kata/55cb854deb36f11f130000e1/ */

//  solution:

function weatherInfo (temp) {
  let celsius = (temp - 32) * (5/9)
  if (celsius < 0) {
    return (celsius + " is freezing temperature")
  } else {
    } return (celsius + " is above freezing temperature")
}

/* Kata "String Templates - Bug Fixing #5" on:
https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/ */

//  solution:

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

/* Kata "Unexpected parsing" on:
https://www.codewars.com/kata/54fdaa4a50f167b5c000005f/ */

//  solution:

function getStatus(isBusy) {
  return {
    status: isBusy ? "busy" : "available"
  }
}

/* Kata "101 Dalmatians - squash the bugs, not the dogs!" on:
https://www.codewars.com/kata/56f6919a6b88de18ff000b36/ */

//  solution:

function howManyDalmatians(number) {
  const dogs = [
    'Hardly any',
    'More than a handful!',
    "Woah that's a lot of dogs!",
    '101 DALMATIANS!!!',
  ]
  const respond =
    number <= 10
      ? dogs[0]
      : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2]
  return respond
}

/* Kata "Fix your code before the garden dies!" on:
https://www.codewars.com/kata/57158fb92ad763bb180004e7/ */

//  solution:

function rainAmount(mm) {
  if (mm < 40) {
       return `You need to give your plant ${40 - mm}mm of water`
  } else {
       return "Your plant has had more than enough water for today!"
  }
}

/* Kata "The Feast of Many Beasts" on:
https://www.codewars.com/kata/5aa736a455f906981800360d/ */

//  solution:

function feast(beast, dish) {
  
  let newBeast = beast.split('');
  let newDish = dish.split('');
  
  if (newDish[newDish.length - 1] === newBeast[newBeast.length - 1] 
     && newDish[0] === newBeast[0]) {
    return true;
  } 
  return false;
}

/* Kata "Stringy Strings" on:
https://www.codewars.com/kata/563b74ddd19a3ad462000054 */

//  solution:

function stringy(size) {
  
  let array = []; 
  
  for (let i = 1; i <= size; i++) {
    if (i % 2 === 0) {
      array.push(0)
    } else {
      array.push(1)
    }
  }
  
  return array.join('')
}

/* Kata "Remove First and Last Character" on:
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/ */

//  solution:

function removeChar(str){
 
  let newStr = str.substring(1, str.length - 1)
  
  return newStr

};

/* Kata "String repeat" on:
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/ */

//  solution:

function repeatStr (n, s) {
  
  let multiply = s.repeat(n)
  return multiply;
}

/* Kata "Reversed Strings" on:
https://www.codewars.com/kata/5168bb5dfe9a00b126000018/ */

//  solution:

function solution(str){
  
  let newStr = str.split("")
  let finalStr = newStr.reverse()
  
  return finalStr.join('')
}

/* Kata "Convert a Number to a String!" on:
https://www.codewars.com/kata/5265326f5fda8eb1160004c8/ */

//  solution:

function numberToString(num) {
  let str = num.toString()
  
  return str
}

/* Kata "Abbreviate a Two Word Name" on:
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/ */

//  solution:

function abbrevName(name){

  let newName = name.split(" ")
  let result
  for (let i = 0; i < newName.length; i++) {
    result = `${newName[0][0]}.${newName[1][0]}`
  }
  return result.toUpperCase()
}