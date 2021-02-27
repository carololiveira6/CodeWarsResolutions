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

// solution Python:
// def multiply(a, b):
//   return a * b


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

//   solution:

function invert(array) {
    return array.map(i => -i)
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

//   solution:

function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
    return sum
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

