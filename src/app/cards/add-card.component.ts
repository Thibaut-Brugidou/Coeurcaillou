import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'cc-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.less']
})
export class AddCardComponent implements OnInit {
	@ViewChild('cardName') name:ElementRef;
	@ViewChild('cardAttack') attack:ElementRef;
	@ViewChild('cardDefence') defence:ElementRef;

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  onAddCard() {
  	let newCard = {
  		cardName: this.name.nativeElement.value,
  		cardAttack: +this.attack.nativeElement.value,
  		cardDefence: +this.defence.nativeElement.value
  	};
  	this.cardService.addCard(newCard);
  }
}
