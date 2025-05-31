
function greeting() {

let name = prompt("What is your name?");
let time = new Date().getHours();

if (time >= 22) {
    console.log("Hello " + name + " it is almost time for bed!");
    } else if (time >= 18) {
    console.log("Hello " + name + " it is time to relax!");
    } else if (time >= 12) {
        console.log("Hello " + name + " it is time to get to work!");
    } else {
        console.log("Hello " + name + " it is time to get ready for the day!");
    }
};

greeting();


