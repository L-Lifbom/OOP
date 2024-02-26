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

    thrownCards () {
        cardPile = []
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

    placeCards(a) {
        for (let i = 0; i < a; i++) {
            cardPile.push(this.hand[this.hand.length - 1])
            this.hand.pop()
        }

        for (let i = 0; i < a; i++) {
            this.hand.push(deck.deck.pop())
        }
    }

    placeAllCards(a) {
        for (let i = 0; i < a; i++) {
            cardPile.push(this.hand.a)
            this.hand.pop()
        }


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
console.log("Remaining cards in deck: ", deck.deck.length)

player1.placeCards(2)
player2.placeCards(2)
console.log(`${player1.playerName} threw and drew two new cards:\n${player1.hand.map(card =>`${card.name} of ${card.suit}`).join(',\n')} \nWith a total value of ${player1.calculateCards()}`)
console.log(`${player2.playerName} threw and drew two new cards:\n${player2.hand.map(card =>`${card.name} of ${card.suit}`).join(',\n')} \nWith a total value of ${player2.calculateCards()}`)
console.log("Remaining cards in deck: ", deck.deck.length)

player1.placeAllCards(player1.hand.length)
player2.placeAllCards(player2.hand.length)

console.log(player1)
console.log(player2)
console.log("Remaining cards in deck: ", deck.deck.length)