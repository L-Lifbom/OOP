class Card {
    constructor (suit, value, name) {
        this.suit = suit
        this.value = value
        this.name = name
    }
}

class Deck {
    constructor () {
        this.deck = [];
        this.generateDeck()
    }

    generateDeck() {
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        const names = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14]

        suits.forEach(suit => {
            names.forEach((name, index) => {
                const value = values[index]
                this.deck.push(new Card(suit, value, name))
            });
        });
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

}

class Player {
    constructor (playerName) {
        this.playerName = playerName
        this.hand = []
    }

    dealCards () {
        for (let i = 0; i < 5; i++) {
            this.hand.push(deck.deck.pop());  
        }
    }

    calculateCards() {
        return this.hand.reduce((total, current) => {
            return total + current.value
        }, 0)
    }
}

const deck = new Deck()
deck.shuffleDeck()

const player1 = new Player("Slim")
const player2 = new Player("Luke")

player1.dealCards()
player2.dealCards()

console.log(`Player 1: ${player1.playerName} has these cards:\n${player1.hand.map(card =>`${card.name} of ${card.suit}`).join(',\n')} \nWith a total value of ${player1.calculateCards()}`)
console.log(`Player 2: ${player2.playerName} has these cards:\n${player2.hand.map(card =>`${card.name} of ${card.suit}`).join(',\n')} \nWith a total value of ${player2.calculateCards()}`)
console.log("Remaining deck: ", deck)