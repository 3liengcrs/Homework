const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick','brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// 1-

// const number = nums.every((num) => {
//     return num >= 0;
    
// })
// console.log(number)
    
// 2 -
// const pana = panagram.every((elem) => {
//     return elem.length < 8;
    
// })
// console.log(pana)

// Filter 

// 1-

//  const number4 = nums.filter( item => item < 4)
//  console.log(number4)
// 2-
// const evenLength =panagram.filter(elem => elem.length%2 === 0 )
// console.log(evenLength)

// find

// 1- Find Find the first value divisible by 5

// const dividBy5 = nums.find(num => num%5 === 0)
// console.log(dividBy5)

// // 2-find the first word that is longer than 5 character
// const wordLonger5 = panagram.find( elem => elem.length > 4)
// console.log(wordLonger5)

//  find index

// 1- find the index of the first number that is divisible by 3
// const findIndex = nums.findIndex(num => num%3 === 0)
  
// console.log(findIndex)

// 2- find the index of the first word that is less than 2 characters long 
// const findWord = panagram.findIndex(elem => elem.length < 2 )
// console.log(findWord)

// For Each

// 1-  console.log each value of the nums array multiplied by 3
// const numsM3 = nums.forEach(num => console.log(num*3))
// console.log(numsM3)

// 2 - console.log each word with an exclamation point at the end of it
// const wordPoint = panagram.forEach(elem  => console.log(elem+"."))
// console.log(wordPoint)

// Thought Questions

// What happened to the original array? nothing
// Can you store the values from a forEachmethod in a new array? yes

// Map

// 1- make a new array of each number multiplied by 100
// const newArray = nums.map(num => num*100)
// console.log(newArray)



// 2-make a new array of all the words in all uppercase

// const newWordArray = panagram.map(elem => elem.toUpperCase())
// console.log(newWordArray)

// Thought Questions

// What happened to the original array? nothing
// Can you store the values from a mapmethod in a new array? yes 

// Some 

// 1- Find out if some numbers are divisible by 7

// const numberDB7 = nums.some( num => num%7 === 0)
// console.log(numberDB7)

// 2- Find out if some words have the letter a in them

// const letterA = panagram.some(elem => elem.includes("a"))
// console.log(letterA)

// Hungry for More

// Reduce

// 1- dd all the numbers in the array together using the reducemethod

// const reduceTheArray = nums.reduce(( acc , cur) => acc + cur)
// console.log(reduceTheArray)
 
//2- concatenate all the words using reduce

// const concatWord = panagram.reduce((acc , curr) => acc + ' '+curr );
// console.log(concatWord)

// Thought Questions

// What happened to the original array?

// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array? no

//  const sortNums = nums.sort()

//  console.log(sortNums)
// Try to sort without any arguments, do you get what you'd expect with the words array? No

// const sortWord = panagram.sort()
// console.log(sortWord)
// Sort the numbers in ascending order

// const ascOrder = nums.sort( (a , b) => b + a )
// console.log(ascOrder)

// Sort the numbers in descending order

// const desOrder = nums.sort( (a , b) => b - a )
// console.log(desOrder)

// Sort the words in ascending order  
 
// const ascWord = panagram.sort()
// console.log( ascWord)

// Sort the words in descending order

// const desWord = panagram.sort().reverse()
// console.log( desWord)



// Array Methods Challenge Problems
// isPanagram
// Using the following array - test whether each letter a-z (case insensitive) is used at least once


// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let isPanagram = true;

// for (let i = 0; i < alphabet.length; i++) {
//     let letterFound = false;

//     for (let j = 0; j < panagram.length; j++) {
//         if (panagram[j].toLowerCase().includes(alphabet[i])) {
//             letterFound = true;
//             break;
//         } 
//     }

//     if (!letterFound) { 
//         isPanagram = false;  
//         break;  
//     }    
// }    

//  console.log(isPanagram);

// Working with data
// filter for products with a price that is less than 10, using the array below:
// sort alphabetically by product name


const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ] 

//   // filter for products with a price that is less than 10, using the array below:
//   const priceLass10 = products.filter(product => product.price < 10 )
//   console.log(priceLass10)

// sort alphabetically by product name



// const sortedProducts = products.map(product => product.name.toLowerCase())

// sortedProducts.sort()
// console.log(sortedProducts)
   
  

