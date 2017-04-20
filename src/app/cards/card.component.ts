import { Component, Input } from '@angular/core';

import { Card } from './card';

@Component({
  selector: 'cc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() card: Card;
}