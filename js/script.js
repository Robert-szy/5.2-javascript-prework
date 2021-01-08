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
            printMessage('Ty wygrywasz!');
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Ja wygrywam!');
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Ja wygrywam!');
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Ja wygrywam!');
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis!');
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis!');
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
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
 
  