import { Injectable } from '@angular/core';
import { CARDS } from './mock-cards';
import { Card } from './card';

@Injectable()
export class CardService {

	cards : Card[];

	constructor() {
		this.cards = CARDS;
	}

	addCard(cardData: {cardName: string, cardAttack: number, cardDefence: number}) {
	  	this.cards.push({
	  		type: 'creature',
	  		name: cardData.cardName,
	  		attack: cardData.cardAttack,
	  		defence: cardData.cardDefence,
	  		picture: 'arthas.jpg'
	  	});
	}

	getCards(): Card[] {
		return this.cards;
	}
}