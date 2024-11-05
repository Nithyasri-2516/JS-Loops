//Continuously running a game until the player chooses to quit.

let playing = true;
let gameRounds = 0; 
do {
    console.log(`Playing round ${gameRounds + 1}`);
    gameRounds++;

    if (gameRounds >= 3) {
        playing = false; 
    }

} while (playing);

console.log("Thanks for playing!");


