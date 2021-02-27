/* Kata "Is it a rainbow?" on:
https://www.codewars.com/kata/59e7202ffc3c4952940000a9 */

// solution:

function sortRainbow(colour){
    let newColour = false
    let i
    let arcIris = ['red','orange','yellow','green','blue','indigo','violet']
    for (i = 0; i < arcIris.length && arcIris[i] === colour[i]; i++)
      if (i === arcIris.length - 1) {
        newColour = true
    }
    return newColour
  }