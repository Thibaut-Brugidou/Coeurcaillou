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

	addCard(newCard) {
		this.cards.push(newCard);
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