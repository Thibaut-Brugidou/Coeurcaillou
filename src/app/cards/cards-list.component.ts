import { Component, OnInit } from '@angular/core';
import { Card } from '../cards/card';
import { CARDS } from '../cards/mock-cards';

@Component({
  selector: 'cc-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})

export class CardsListComponent implements OnInit {

  cards = CARDS;
  selectedCard: Card;

  ngOnInit() {
  }

  onCardAdded(cardData: {cardName: string, cardAttack: number, cardDefence: number}) {
  	this.cards.push({
  		type: 'creature',
  		name: cardData.cardName,
  		attack: cardData.cardAttack,
  		defence: cardData.cardDefence,
  		picture: 'arthas.jpg'
  	})
  }

}
