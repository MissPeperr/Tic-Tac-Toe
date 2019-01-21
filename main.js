// # Tic Tac Toe

// 1. Create a grid of nine boxes
// 2. When any box is clicked a red `X` appears
// 3. When the next box is clicked a Blue `O` appears
// 4. #1 and #2 are repeated until a row of 3 of the same character is created
// 5. When a win happens:
//     1. Alert the players who won
//     2. Disallow any further clicks on the game board
//     3. Display a `Play Again` button that resets the game
// 6. For a tie:
//     1. Alert players that game has ended in a tie
//     2. Display a `Play Again` button that resets the game

// making some global variables
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let counter = 0;
let placeArray = [];
let isWinner = false;
let xWins = 0;
let oWins = 0;

// global variables for query selectors
let gameContainer = document.querySelector("#game-container");
let xWinHTML = document.querySelector("#x-wins");
let oWinHTML = document.querySelector("#o-wins");
let playAgainBtn = document.createElement("button");
playAgainBtn.setAttribute("id", "play-again-btn");
playAgainBtn.textContent = "Play Again!";

// make a global event listener for the container
gameContainer.addEventListener("click", (event) => {

    // if the target.id matches the boxID, then select that box from the DOM
    // if the counter is even, innerHTML = X
    // if the counter is odd, innerHTML = O
    // then add 1 to the counter
    if(!isWinner){

        numArray.forEach((num) => {

            if(event.target.id === `box-${num}`){

                let targetBox = document.querySelector(`#box-${num}`);
                // FYI counter goes up even when the same box is clicked again
                if(counter % 2 === 0 && targetBox.innerHTML === ""){
                    targetBox.setAttribute("style", "color: darkred;");
                    targetBox.innerHTML = "X";
                    placeArray[num - 1] = "X";
                } else if(counter % 2 !== 0 && targetBox.innerHTML === ""){
                    targetBox.setAttribute("style", "color: royalblue;");
                    targetBox.innerHTML = "O";
                    placeArray[num - 1] = "O";
                }

            counter++;
            /* 
                placeArray can NOT be undefined instead of empty (""), because the "empty" array returns as undefined
                Each place on the board corresponds with an index in the placeArray
                So indexes [0-8] correspond with places 1-9.
            */
            // combinations for winning: (from left to right)
            // first row
            if(((placeArray[0] === placeArray[1]) && (placeArray[1] === placeArray[2])) && placeArray[0] !== undefined){
                alert(`The ${placeArray[0]}'s win!`);
                if(placeArray[0] === "X"){
                    xWins++;
                    xWinHTML.innerHTML = `X Wins: ${xWins}`;
                } else if(placeArray[0] === "O"){
                    oWins++;
                    oWinHTML.innerHTML = `O Wins: ${oWins}`;
                }
                isWinner = true;
            // second row
            } else if (((placeArray[3] === placeArray[4]) && (placeArray[4] === placeArray[5])) && placeArray[3] !== undefined){
                alert(`The ${placeArray[3]}'s win!`);
                if(placeArray[3] === "X"){
                    xWins++;
                    xWinHTML.innerHTML = `X Wins: ${xWins}`;
                } else if(placeArray[3] === "O"){
                    oWins++;
                    oWinHTML.innerHTML = `O Wins: ${oWins}`;
                }
                isWinner = true;
            // third row
            } else if (((placeArray[6] === placeArray[7]) && (placeArray[7] === placeArray[8])) && placeArray[6] !== undefined){
                alert(`The ${placeArray[6]}'s win!`);
                if(placeArray[6] === "X"){
                    xWins++;
                    xWinHTML.innerHTML = `X Wins: ${xWins}`;
                } else if(placeArray[6] === "O"){
                    oWins++;
                    oWinHTML.innerHTML = `O Wins: ${oWins}`;
                }
                isWinner = true;
            // left column
            } else if (((placeArray[0] === placeArray[3]) && (placeArray[3] === placeArray[6])) && placeArray[0] !== undefined){
                alert(`The ${placeArray[0]}'s win!`);
                if(placeArray[0] === "X"){
                    xWins++;
                    xWinHTML.innerHTML = `X Wins: ${xWins}`;
                } else if(placeArray[0] === "O"){
                    oWins++;
                    oWinHTML.innerHTML = `O Wins: ${oWins}`;
                }
                isWinner = true;
            // middle column
            } else if (((placeArray[1] === placeArray[4]) && (placeArray[4] === placeArray[7])) && placeArray[1] !== undefined){
                alert(`The ${placeArray[1]}'s win!`);
                if(placeArray[1] === "X"){
                    xWins++;
                    xWinHTML.innerHTML = `X Wins: ${xWins}`;
                } else if(placeArray[1] === "O"){
                    oWins++;
                    oWinHTML.innerHTML = `O Wins: ${oWins}`;
                }
                isWinner = true;
            // right column
            } else if (((placeArray[2] === placeArray[5]) && (placeArray[5] === placeArray[8])) && placeArray[2] !== undefined){
                alert(`The ${placeArray[2]}'s win!`);
                if(placeArray[2] === "X"){
                    xWins++;
                    xWinHTML.innerHTML = `X Wins: ${xWins}`;
                } else if(placeArray[2] === "O"){
                    oWins++;
                    oWinHTML.innerHTML = `O Wins: ${oWins}`;
                }
                isWinner = true;
            // top left to bottom right diagonal
            } else if (((placeArray[0] === placeArray[4]) && (placeArray[4] === placeArray[8])) && placeArray[0] !== undefined){
                alert(`The ${placeArray[0]}'s win!`);
                if(placeArray[0] === "X"){
                    xWins++;
                    xWinHTML.innerHTML = `X Wins: ${xWins}`;
                } else if(placeArray[0] === "O"){
                    oWins++;
                    oWinHTML.innerHTML = `O Wins: ${oWins}`;
                }
                isWinner = true;
            // top right to bottom left diagonal
            } else if (((placeArray[2] === placeArray[4]) && (placeArray[4] === placeArray[6])) && placeArray[2] !== undefined){
                alert(`The ${placeArray[2]}'s win!`);
                if(placeArray[2] === "X"){
                    xWins++;
                    xWinHTML.innerHTML = `X Wins: ${xWins}`;
                } else if(placeArray[2] === "O"){
                    oWins++;
                    oWinHTML.innerHTML = `O Wins: ${oWins}`;
                }
                isWinner = true;
            // tie
            } else if (counter === 9){
                alert("It's a tie!");
            }
        }
    })
    // if isWinner is true, and the page does NOT already have a play again buton... then show the play again button
    } else if(isWinner && !document.querySelector("#header-div").contains(playAgainBtn)) {
        document.querySelector("#header-div").appendChild(playAgainBtn);
    }
    
})

// if user clicks the play again button, reset the board, counters, and make sure isWinner is false
playAgainBtn.addEventListener("click", () => {
    numArray.forEach((num) => {
        document.querySelector(`#box-${num}`).innerHTML = "";
        placeArray = [];
        counter = 0;
        isWinner = false;
    })
})