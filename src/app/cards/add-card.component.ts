import { Component, ViewChild, ElementRef} from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'cc-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.less']
})

export class AddCardComponent {
	@ViewChild('cardName') name:ElementRef;
	@ViewChild('cardAttack') attack:ElementRef;
  @ViewChild('cardDefence') defence:ElementRef;
  @ViewChild('cardCost') cost:ElementRef;

  constructor(private cardService: CardService) { }

  onAddCard() {
  	let newCard = {
  		cardName: this.name.nativeElement.value,
  		cardAttack: +this.attack.nativeElement.value,
      cardDefence: +this.defence.nativeElement.value,
      cardCost: +this.cost.nativeElement.value
  	};
  	this.cardService.addCard(newCard);
  }
}
