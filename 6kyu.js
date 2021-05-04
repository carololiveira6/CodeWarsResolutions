/* Kata "Who likes it?" on:
https://www.codewars.com/kata/5266876b8f4bf2da9b000362/ */

//  solution:

function likes(names) {

    if (names.length === 0) {
      return 'no one likes this'
    }
    if (names.length === 1) {
      return `${names[0]} likes this`
    }
    if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`
    }
    if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    if (names.length > 3) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

/* Kata "Detect Pangram" on:
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/ */

//  solution:

function isPangram(string){
  let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  let regex = '/\string/g';
  let lowerCase = string.toLowerCase().replace(regex, "");
  
  for (let i = 0; i < alfabeto.length; i++) {
    if (lowerCase.indexOf(alfabeto[i]) === -1) {
      return false;
    }
  }
  
  return true;
}