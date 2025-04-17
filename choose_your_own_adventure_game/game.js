const prompt =require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hey user" , name, "Welcome to the game!")


const shouldWePlay = prompt("Do you want to play? ")

if (shouldWePlay.toLowerCase() === "yes")
 {console.log("Okay, Let's go !!!")

    //game logic
    const leftOrRight = prompt("You are in a dark room with two doors.Do you want to go left or right?")
    if (leftOrRight === "left"){

        console.log("You fallinto  pit of snakes!🐍🐍🐍")
        const cross = prompt("Do you want to cross the pit?")

    } else{
        console.log("You find a treasure chest!💰. The treasure is a golden sword!🗡️......Unlocking the Knight of the Realm.👑. Yes!You have to fight a monster to get the treasure!So be ready to unlock new paths and choose wise.")

    }

 } else if
    (shouldWePlay.toLowerCase() === "no")
    {
        console.log("OKay, maybe next time!")
    }
 
 else{
    console.log("Invalid input........")}