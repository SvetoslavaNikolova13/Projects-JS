// Variables

let openButton = document.getElementById('open-button');

let closeButton = document.getElementById('close-button');

let modalContainer = document.getElementById('modal-container"');

// Event Listeners
openButton.addEventListener('click',function() {
    modalContainer.style.display = 'block';
});

closeButton.addEventListener('click',function() {
    modalContainer.style.display = 'none';
});

window.addEventListener('click',function(event) {
    if (event.target == modalContainer){
        modalContainer.style.display = 'none';
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