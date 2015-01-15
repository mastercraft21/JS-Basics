//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

var isTyler = function(name1) {
  if(name1 === "Tyler") {
    return "True";
  }
    else {
      return "False";
    }
}

var result = isTyler(name)

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function() {
  var usersName = prompt("Please type your name");
  return usersName;
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function() {
  var name = getName();
  alert("Welcome "+ name);
}

//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

  //Code Here

//Told to wait until 1/15 to come back

//Next Problem



//What is the difference between arguments and parameters?

  //Answer Here

//Parameters are placeholders to accept inputs into a function.  Arguments are the inputs passed into the function.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

//null, undefined, 0, NaN, false, ""

if(!something) {

}

//Next Problem



//Create a function called myName that returns your name

  //Code Here

var myName = function() {
  return "Bryan"
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

var newMyName = myName

//Now alert the result of invoking newMyName

alert(newMyName())

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

var outerFn = function() {
  return function() {
    var yourName = prompt("What is your name?")
    return yourName;
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();