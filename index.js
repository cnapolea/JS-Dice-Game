function startGame() {
    
    function randomNumberGenerator () {
        /* Return a random number in a 1-6 range. */
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        return randomNumber;
    }
    //Random numbers being assigned to each player
    var player1_dice = randomNumberGenerator();
    var player2_dice = randomNumberGenerator();
    
    function changeDicePicture(diceNumber, element) {
        /* Changes the dice image according to the dice number provided */
        var diceImageElement = document.querySelector(element);
        diceImageElement.setAttribute("src", "/images/dice" + diceNumber + ".png");
    }
    
    function declareWinner(player1, player2) {
        /*Compare dice's input between player 1 and player 2*/
        var mainHeader = document.querySelector(".container h1");
        if (player1 > player2) {
            mainHeader.textContent = "Player 1 Wins 🚩";
        } else if (player1 < player2) {
            mainHeader.textContent = "Player 2 Wins 🚩";
        } else {
            mainHeader.textContent = "It Is A Draw 😮";
        }
    }

    changeDicePicture(player1_dice,".img1");
    changeDicePicture(player2_dice,".img2");
    declareWinner(player1_dice,player2_dice);
};

startGame();