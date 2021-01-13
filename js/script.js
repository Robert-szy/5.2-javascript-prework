{
function playGame (playerInput){
    clearMessages();
    function getMoveName(argMoveId){
        console.log('argMoveID:', argMoveId);
        if(argMoveId == 1){
        return 'papier';
        } else if (argMoveId == 2) {
            return 'nożyce';
            } else if (argMoveId == 3) {
            return 'kamień';
        } else {
          printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }
  
    function displayResult(argComputerMove, argPlayerMove){
        console.log('argComputerMove:', argComputerMove, 'argPlayerMove:', argPlayerMove);
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywasz rundę!');
            playerCount = playerCount + 1;
            printMessage('Twój wynik: ' + playerCount + ' - Mój wynik: ' + computerCount);
            if (playerCount == 10) {
                printMessage ('BRAWO! WYGRAŁEŚ!');
                playerCount = 0;
                computerCount = 0;
                return;
            } else if (computerCount == 10) {
                printMessage ('TYM RAZEM JA WYGRAŁEM!');
                playerCount = 0;
                computerCount = 0;
                return;
            }
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Wygrywam rundę!');
            computerCount = computerCount + 1;
            printMessage('Twój wynik: ' + playerCount + ' - Mój wynik: ' + computerCount);
            if (playerCount == 10) {
                printMessage ('BRAWO! WYGRAŁEŚ!');
                playerCount = 0;
                computerCount = 0;
                return;
            } else if (computerCount == 10) {
                printMessage ('TYM RAZEM JA WYGRAŁEM!');
                playerCount = 0;
                computerCount = 0;
                return;
            }
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Wygrywam rundę!');
            computerCount = computerCount + 1;
            printMessage('Twój wynik: ' + playerCount + ' - Mój wynik: ' + computerCount);
            if (playerCount == 10) {
                printMessage ('BRAWO! WYGRAŁEŚ!');
                playerCount = 0;
                computerCount = 0;
                return;
            } else if (computerCount == 10) {
                printMessage ('TYM RAZEM JA WYGRAŁEM!');
                playerCount = 0;
                computerCount = 0;
                return;
            }
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrywasz rundę!');
            playerCount = playerCount + 1;
            printMessage('Twój wynik: ' + playerCount + ' - Mój wynik: ' + computerCount);
            if (playerCount == 10) {
                printMessage ('BRAWO! WYGRAŁEŚ!');
                playerCount = 0;
                computerCount = 0;
                return;
            } else if (computerCount == 10) {
                printMessage ('TYM RAZEM JA WYGRAŁEM!');
                playerCount = 0;
                computerCount = 0;
                return;
            }
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Wygrywasz rundę!');
            playerCount = playerCount + 1;
            printMessage('Twój wynik: ' + playerCount + ' - Mój wynik: ' + computerCount);
            if (playerCount == 10) {
                printMessage ('BRAWO! WYGRAŁEŚ!');
                playerCount = 0;
                computerCount = 0;
                return;
            } else if (computerCount == 10) {
                printMessage ('TYM RAZEM JA WYGRAŁEM!');
                playerCount = 0;
                computerCount = 0;
                return;
            }
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywam rundę!');
            computerCount = computerCount + 1;
            printMessage('Twój wynik: ' + playerCount + ' - Mój wynik: ' + computerCount);
            if (playerCount == 10) {
                printMessage ('BRAWO! WYGRAŁEŚ!');
                playerCount = 0;
                computerCount = 0;
                return;
            } else if (computerCount == 10) {
                printMessage ('TYM RAZEM JA WYGRAŁEM!');
                playerCount = 0;
                computerCount = 0;
                return;
            }
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis!');
            printMessage('Twój wynik: ' + playerCount + ' - Mój wynik: ' + computerCount);
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis!');
            printMessage('Twój wynik: ' + playerCount + ' - Mój wynik: ' + computerCount);
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
            printMessage('Twój wynik: ' + playerCount + ' - Mój wynik: ' + computerCount);
        } else {
            printMessage('Powtórz swój ruch!')
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);

    displayResult (computerMove, playerMove);
}

let playerCount = 0;
let computerCount = 0;

document.getElementById('play-paper').addEventListener('click', function(){
    printMessage('Kliknięty przycisk Papier');
    playGame(1)
});

document.getElementById('play-scissors').addEventListener('click', function(){
    printMessage('Kliknięty został przycisk Nożyce');
    playGame(2)
});

document.getElementById('play-stone').addEventListener('click', function(){
    printMessage('Kliknięty został przycisk Kamień');
    playGame(3)
});
 
document.getElementById('restart').addEventListener('click', function(){
    clearMessages();
    playerCount = 0;
    computerCount = 0;
});
}