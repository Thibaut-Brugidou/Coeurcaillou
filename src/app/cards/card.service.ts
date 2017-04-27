import { Injectable } from '@angular/core';
import { CARDS } from './mock-cards';
import { Card } from './card';

@Injectable()
export class CardService {

	selectedCard: number;
	cards: Card[];

	constructor() {
		this.cards = CARDS;
		this.selectedCard = 0;
	}

	addCard(cardData: {cardName: string, cardAttack: number, cardDefence: number, cardCost: number}) {
	  	this.cards.push({
	  		type: 'creature',
	  		name: cardData.cardName,
	  		attack: cardData.cardAttack,
	  		defence: cardData.cardDefence,
	  		cost: cardData.cardCost,
	  		picture: 'arthas.jpg'
	  	});
	}

	selectCard(cardNumber) {
		this.selectedCard = cardNumber;
	}

	getSelectedCard(): Card {
		return this.cards[this.selectedCard];
	}

	getCards(): Card[] {
		return this.cards;
	}
}