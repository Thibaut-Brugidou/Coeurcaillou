import { Component, OnInit, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'cc-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  @Output() cardCreated = new EventEmitter<{cardName: string, cardAttack: string, cardDefence: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddCard(nameInput: HTMLInputElement, attackInput: HTMLInputElement, defenceInput: HTMLInputElement) {
  	this.cardCreated.emit({
  		cardName: nameInput.value,
  		cardAttack: attackInput.value,
  		cardDefence: defenceInput.value
  	})
  }
}
