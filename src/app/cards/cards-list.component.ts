import { Component, ViewEncapsulation } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'cc-cards-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.less']
})

export class CardsListComponent {

  constructor(private cardService: CardService) { }

  cards: Card[] = this.cardService.getCards();

  onSelectCard(index: number) {
  	this.cardService.selectCard(index);
  }

  isCardSelected(index: number) {
  	return this.cardService.selectedCard == index;
  }

}
