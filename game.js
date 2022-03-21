var player1 = 1;
var player2 = 2;
var moves;
var player1win = 0;
var player2win = 0;
var ties = 0;

var randomPlayer = Math.floor(Math.random()*2+1);

if (randomPlayer == 1) {
    alert("Player1 starts!");
} else {
    alert("Player2 starts!");
}

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");

    const winningArrays = [
        [0, 1, 2, 3, 4], [41, 40, 39, 38, 37], [7, 8, 9, 10, 11], [34, 33, 32, 31, 30], [14, 15, 16, 17, 18],
        [27, 26, 25, 24,23], [21, 22, 23, 24,25], [20, 19, 18, 17, 18], [28, 29, 30, 31, 32], [13, 12, 11, 10, 9],
        [35, 36, 37, 38, 39], [6, 5, 4, 3, 2], [0, 7, 14, 21, 28], [41, 34, 27, 20, 13], [1, 8, 15, 22, 29],
        [40, 33, 26, 19, 12], [2, 9, 16, 23, 30], [39, 32, 25, 18, 11], [3, 10, 17, 24, 31], [38, 31, 24, 17, 10],
        [4, 11, 18, 25, 32], [37, 30, 23, 16, 9], [5, 12, 19, 26, 33], [36, 29, 22, 15, 8], [6, 13, 20, 27, 34],
        [35, 28, 21, 14, 7], [0, 8, 16, 24, 32], [41, 33, 25, 17, 9], [7, 15, 23, 31, 39], [34, 26, 18, 10, 2],
        [35, 29, 23, 17, 11], [6, 12, 18, 24, 30], [28, 22, 16, 10, 4],[13, 19, 25, 31, 37],[36, 30, 24, 18, 12], 
        [5, 11, 17, 23, 29],[37, 31, 25, 19, 13], [4, 10, 16, 22, 28], [2, 10, 18, 26, 34], [39, 31, 23, 15, 7], 
        [1, 9, 17, 25, 33], [40, 32, 24, 16, 8], [9, 17, 25, 33, 41], [8, 16, 24, 32, 40], [11, 17, 23, 29, 35], 
        [12, 18, 24, 30, 36], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [8, 9, 10, 11, 12], [12, 11, 10, 9, 8], [15, 16, 17, 18, 19],
        [19, 18, 17, 16, 15], [22, 23, 24, 25, 26], [26, 25, 24, 23, 22], [29, 30, 31, 32, 33], [33, 32, 31, 30, 29],
        [36, 37, 38, 39, 40], [40, 39, 38, 37, 36], [7, 14, 21, 28, 35], [8, 15, 22, 29, 36], [9, 16, 23, 30, 37],
        [10, 17, 24, 31, 38], [11, 18, 25, 32, 39], [12, 19, 26, 33, 40], [13, 20, 27, 34, 41],
    ]
    
    function resetBoard() {
        for (let i = 0; i < squares.length; i++) {
            var done = squares[i].innerHTML("");
        }
        return done;
    }

    function checkBoard() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]]
            const square2 = squares[winningArrays[y][1]]
            const square3 = squares[winningArrays[y][2]]
            const square4 = squares[winningArrays[y][3]]
            const square5 = squares[winningArrays[y][4]]
            if (square1.classList.contains('player-one') && square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') && square4.classList.contains('player-one') && 
                square5.classList.contains('player-one'))
            {
                alert("Player One Wins!");
                resetBoard();
            } 
            if (square1.classList.contains('player-two') && square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') && square4.classList.contains('player-two') &&
                square5.classList.contains('player-two'))
            {
                alert('Player Two Wins!');
                resetBoard();
            }            
        }
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            if (squares[i+7].classList.contains("full") && !squares[i].classList.contains("full")) {
                if (randomPlayer == player1) {
                    squares[i].classList.add("full");
                    squares[i].classList.add("player-one");
                    randomPlayer = 2;
                } else if (randomPlayer == player2) {
                    squares[i].classList.add("full");
                    squares[i].classList.add("player-two");
                    randomPlayer = 1;
                } else alert("Illegal Move! Please try again!");
                checkBoard();
            }
        }
    }
})