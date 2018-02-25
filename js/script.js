//get container table


//add cards to an array
let array = [".frontcard",".backcard"];
array = shuffle(array);

const cardField = document.getElementById('cardholder');

cardField.addEventListener("click",function(e){cardClick(e)});


function cardClick(e) {

    const clickedCard=e.target.parentElement.parentElement;
    console.log(clickedCard);
    if(clickedCard.nodeName=='TD') clickedCard.classList.toggle('visible');
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}