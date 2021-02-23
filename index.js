// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
    -Counter 2 declares the variable "count" in the global scope, so all results will be accessible in the global scope for another function to call on it if needed. Counter 1 has the varaible called inside the scope, so the counter will add up, but stay within the counterMaker function, and only be accessible INSIDE that function's scope, and it cannot be used by any other functions because it is not in the global scope. 
  
  2. Which of the two uses a closure? How can you tell?
    - Counter 1 has 2 closures, one for the main function of counterMaker, and another for function counter within the counterMaker function. The second formula only has one scope, returning the count++ - you can tell by the {curley brackets}
  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     - Counter 1 would be preferrable in a situation where you would want the count to remain INSIDE the function of "counterMaker" so that "counterMaker" can be used as a perameter in a future function. 
     - Counter 2 would be used, if the function is being used to creat a count that would be accessed globally, so that another function, seperate from the counterMaker function, could use the resulting count as it's own perameter, since it could be accessed globally. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning() {
  return (Math.floor(Math.random()) * 3) 
}

// random float, times 3, and then rounded down. This will create a 2 digit decimal, multiplied by 3, then rounded down to the nearest whole. The highest possibility is .99 compounding to 2.97 which will round down to a whole number of 2. The lowest it can possible go is .01, which will round down to 0. Thus covering all possibilities of 0, 1, and 2 as a result. 


// function inning(score) {
//   let score = Math.random();
//    if (score >= .33) {
//       return 0;
//    } else if (score < .33 && score > .66) {
//       return 1;
//    } else if (score < .66 && score > 1) {
//       return 2
//    }
// }
// console.log(inning)


/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

 // inning IS THE CallBack (cB)
 // first find the result of the inning
 // then add the result of the inning to the score

function finalScore(inning, inningsPlayed) { //pass in the 2 parameters
  let Home = 0; // declare Home as a variable and make it start at 0
  let Away = 0; // declare Away as a variable and make it start at 0
  for ( let i = 0; i < inningsPlayed; i++) { // loop through the inningsPlayed (because the amount played is given as a parameter)
    Home += inning(); // Take the value of Home, which is 0, and add the score from the inning
    Away += inning(); // Take the value of Away, which is 0, and add the score from the inning
  }
  return {   // OUTSIDE OF THE finalScore function's scope, return the result
    Home: Home, // return Home AND (use a comma for multiple return statements to list them)
    Away: Away // return Away
  }
}
console.log(finalScore(inning, 9))



/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */


  // DONT FORGET..... "inning" IS the CallBack!!!!!!!!!!!
  
function getInningScore(inning) {
  /*Your Code Here */
}


/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  //console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
