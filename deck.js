const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


function shuffleDeck(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function createDeck() {
    let deckValues = [];
    for (i = 0; i < SUITS.length; i++) {
        for (v = 0; v < VALUES.length; v++) {
            deckValues.push(SUITS[i] + VALUES[v]);
        }
    }
    shuffleDeck(deckValues);
    console.log(deckValues);
}

createDeck();