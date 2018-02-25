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



/*

let restart = document.getElementById("restart");
restart.addEventListener("click", newGame);
//create card elements
for (let i = 0; i < deck.length; i++) {
    const rows = document.createElement("li");
    let j = 0;
    while (j < deck.length) {
        const cells = document.createElement("i");
        j++;


        rows.appendChild(cells);
    }
    table.appendChild(rows);
}

table.addEventListener("click", clickCard);

function newGame() {
    console.log("restart test");
}

function clickCard () {
    let targetElement = event.target.parentElement;
    console.log(targetElement);
    console.log(targetElement.nodeName);
    if (targetElement.nodeName == "LI") {
        targetElement.classList.toggle("visible");
        console.log("toggle");
    }
    else {
        (targetElement.nodeName == "I")

            targetElement.parentElement.classList.toggle("visible");
    }
}
*/
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