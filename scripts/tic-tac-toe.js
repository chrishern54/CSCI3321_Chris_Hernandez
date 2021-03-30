var gameOver = false;
var totalMove = 0;
var currentPlayer = 'X';

function placeMarker(spotId){
    if(!gameOver){
    switch(spotId){
        case '1':
            var d = document.getElementById('box1');
                if(d.innerHTML == '' && currentPlayer == 'X'){
                    d.innerHTML = 'X';
                    currentPlayer = 'O';
                    totalMove++;
                }
                else if(d.innerHTML == '' && currentPlayer == 'O'){
                    d.innerHTML = currentPlayer;
                    currentPlayer = 'X'
                    totalMove++;
                }
                break;
        case '2':
            var d = document.getElementById('box2');
                if(currentPlayer == 'X'){
                    d.innerHTML = 'X';
                    currentPlayer = 'O';
                    totalMove++;
                }
                else if(currentPlayer == 'O'){
                    d.innerHTML = currentPlayer;
                    currentPlayer = 'X'
                    totalMove++;
                }
                break;
        case '3':
            var d = document.getElementById('box3');
                if(d.innerHTML == '' && currentPlayer == 'X'){
                    d.innerHTML = 'X';
                    currentPlayer = 'O';
                    totalMove++;
                }
                else if(d.innerHTML == '' && currentPlayer == 'O'){
                    d.innerHTML = currentPlayer;
                    currentPlayer = 'X'
                    totalMove++;
                }
                break;
        case '4':
            var d = document.getElementById('box4');
                if(d.innerHTML == '' && currentPlayer == 'X'){
                    d.innerHTML = 'X';
                    currentPlayer = 'O';
                    totalMove++;
                }
                else if(d.innerHTML == '' && currentPlayer == 'O'){
                    d.innerHTML = currentPlayer;
                    currentPlayer = 'X'
                    totalMove++;
                }
                break;
        case '5':
            var d = document.getElementById('box5');
                if(d.innerHTML == '' && currentPlayer == 'X'){
                    d.innerHTML = 'X';
                    currentPlayer = 'O';
                    totalMove++;
                }
                else if(d.innerHTML == '' && currentPlayer == 'O'){
                    d.innerHTML = currentPlayer;
                    currentPlayer = 'X'
                    totalMove++;
                }
                break;
        case '6':
            var d = document.getElementById('box6');
                if(d.innerHTML == '' && currentPlayer == 'X'){
                    d.innerHTML = 'X';
                    currentPlayer = 'O';
                    totalMove++;
                }
                else if(d.innerHTML == '' && currentPlayer == 'O'){
                    d.innerHTML = currentPlayer;
                    currentPlayer = 'X'
                    totalMove++;
                }
                break;
        case '7':
            var d = document.getElementById('box7');
                if(d.innerHTML == '' && currentPlayer == 'X'){
                    d.innerHTML = 'X';
                    currentPlayer = 'O';
                    totalMove++;
                }
                else if(d.innerHTML == '' && currentPlayer == 'O'){
                    d.innerHTML = currentPlayer;
                    currentPlayer = 'X'
                    totalMove++;
                }
                break;
        case '8':
            var d = document.getElementById('box8');
                if(d.innerHTML == '' && currentPlayer == 'X'){
                    d.innerHTML = 'X';
                    currentPlayer = 'O';
                    totalMove++;
                }
                else if(d.innerHTML == '' && currentPlayer == 'O'){
                    d.innerHTML = currentPlayer;
                    currentPlayer = 'X'
                    totalMove++;
                }
                break;
        case '9':
            var d = document.getElementById('box9');
                if(d.innerHTML == '' && currentPlayer == 'X'){
                    d.innerHTML = 'X';
                    currentPlayer = 'O';
                    totalMove++;
                }
                else if(d.innerHTML == '' && currentPlayer == 'O'){
                    d.innerHTML = currentPlayer;
                    currentPlayer = 'X'
                    totalMove++;
                }
                break;
    }
}
        else if(gameOver){
            document.getElementById('result').innerHTML = `Player ${currentPlayer} Wins`;
        }
        else if(totalMove == 8){
            gameOver = true;
            document.getElementById('result').innerHTML = 'This Game is a Tie!'
        }
}

function playerWon(){
    var s1, s2, s3, s4, s5, s6, s7, s8, s9;
    s1 = document.getElementById('box1');
    s2 = document.getElementById('box2');
    s3 = document.getElementById('box3');
    s4 = document.getElementById('box4');
    s5 = document.getElementById('box5');
    s6 = document.getElementById('box6');
    s7 = document.getElementById('box7');
    s8 = document.getElementById('box8');
    s9 = document.getElementById('box9');

        if((s1.innerHTML == s2.innerHTML && s2.innerHTML == s3.innerHTML && s2.innerHTML != '') || 
            (s4.innerHTML == s5.innerHTML && s5.innerHTML == s6.innerHTML && s5.innerHTML != '') || 
            (s7.innerHTML == s8.innerHTML && s8.innerHTML == s9.innerHTML && s8.innerHTML != '')){
                gameOver = true;

        }
        else {
            gameOver = false;
        }
        return gameOver;
}