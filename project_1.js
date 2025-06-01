// takes in a user input and prints a statement depending on what the time is.


function greeting() {                // declares a function named greeting

let name = prompt("What is your name?");                    // declares a variable called name which prompts the user "What is your name?" 
let time = new Date().getHours();                           // declares a variable called time which gets the current time

if (time >= 22) {                                                                   // conditional statement if time is greater or equal to 22 run code below
    console.log("Hello " + name + " it is almost time for bed!");                   // print string
    } else if (time >= 18) {                                                        // conditional statement if time is greater or equal to 18 run code below
    console.log("Hello " + name + " it is time to relax!");                         // print string
    } else if (time >= 12) {                                                        // conditional statement if time is greater or equal to 18 run code below
        console.log("Hello " + name + " it is time to get to work!");               // print string
    } else {                                                                        // conditional statement if time is greater or equal to 22 run code below
        console.log("Hello " + name + " it is time to get ready for the day!");     // print string
    }
};

greeting();        // calls the greeting function


