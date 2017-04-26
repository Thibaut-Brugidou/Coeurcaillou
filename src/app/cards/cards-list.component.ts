import { Component } from '@angular/core';
import { Card } from '../cards/card';
import { CardService } from './card.service';

@Component({
  selector: 'cc-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.less']
})

export class CardsListComponent {

  constructor(private cardService: CardService) { }

  cards: Card[] = this.cardService.getCards();

}
