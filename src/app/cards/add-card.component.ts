import { Component, ViewChild, ElementRef} from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';

@Component({
  selector: 'cc-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.less']
})

export class AddCardComponent {
  newCard: Card = new Card();

  constructor(private cardService: CardService) {
    this.newCard.type = 'Creature';
    this.newCard.picture = 'illidan.jpg';
  }

  onSubmit() {
    console.log('pouet');
  }

  onAddCard() {
    this.cardService.addCard(this.newCard);
  }
}
