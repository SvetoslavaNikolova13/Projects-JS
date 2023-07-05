
function playGame() {
    var grid = document.querySelectorAll('.block');
    var hitPosition;
    var score = 0;
    var pointGainedOnce = 0;
    var gameSpeed = 750;
    // Timer
    var timer__html = document.querySelector('#timer');
    var timeLeft = document.querySelector('#duration-drop').value;
    var gameSpeed = document.querySelector('#gameSpeed').value;

    var timerID = setInterval(function() {
        if (timeLeft < 1) {
            clearInterval(timerID);
            gameStatus = "stale";
            document.querySelector('#text').textContent = "Play Again";
            startButton.style.background =  '#c7197f';
            startButton.style.fontweight = 'Initial';
            //Modal
            document.querySelector('.modal').style.display = 'block';
            document.querySelector('#modal-score').textContent = score;
            document.querySelector('#duration-drop').disabled = false;
            document.querySelector('#gameSpeed').disabled = false;
            document.querySelector('.speed-box').style.cursor = 'pointer';
            document.querySelector('#gameSpeed').style.cursor = 'pointer';
            document.querySelector('.duration').style.cusor = 'pointer';
            document.querySelector('#duration-drop').style.cursor = 'pointer';

        }

        timer__html.textContent = timeLeft;
        timeLeft--;

    },1000);

    //Game
    function popMouse(randomBlock) {
        grid[randomBlock].classList.add("mouse");
    }

    function removeMouse() {
        grid.forEach(element => {
           element.classList.remove("mouse");
        });
    }
    
    grid.forEach(element => {
        element.addEventListener('click',() => {
            if (element.id == hitPosition + 1 && timeLeft > 0 && pointGainedOnce) {
                score++;
                document.querySelector('#score-text').textContent = score;
                pointGainedOnce = 0;
            }
        })
    });


    var mouseTimer = setInterval(() => {
        if (timeLeft < 1) {
            clearInterval(mouseTimer)
        }
        removeMouse();
        let randomBlock = Math.floor((Math.random())*16);
        hitPosition = randomBlock;
        popMouse(randomBlock);
        pointGainedOnce = 1;
    },gameSpeed);

}    

var startButton = document.querySelector('#play');
var gameStatus = 'stale';


startButton.addEventListener('click',() =>{
    if (gameStatus == "stale") {
        playGame();
        document.querySelector('#score-text').textContent = '0';
        document.querySelector('#duration-drop').disabled = true;
        document.querySelector('#gameSpeed').disabled = true;
        document.querySelector('.speed-box').style.cursor = 'auto';
        document.querySelector('#gameSpeed').style.cursor = 'auto';
        document.querySelector('.duration').style.cursor = 'auto';
        document.querySelector('#duration-drop').style.cursor = 'auto';
        gameStatus = 'Running';
        startButton.style.background = '#a3c217';
        document.querySelector('#text').textContent = 'You are playing';
    }

})

//Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    








