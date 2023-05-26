// Variables

let openBtn = document.getElementById('open-btn');

let closeBtn = document.getElementById('close-btn');

let modalBox = document.getElementById('modal-box');

// Event Listeners
openBtn.addEventListener('click', () => {
    modalBox.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modalBox.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalBox){
        modalBox.style.display = 'none';
    }
});




/*openButton.onclick = function() {
    modalContainer.style.display = "block";
}

closeButton.onclick = function() {
    modalContainer.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modalContainer) {
        modalContainer.style.display = "none";
    }
}*/


/*closeFlowerButton.addEventListener('click',function() {
    flowerContainer.style.display = 'none';
});

window.addEventListener('click',function(event) {
    if (event.target == flowerContainer){
        flowerContainer.style.display = 'none';
    }
});*/