import { Injectable } from '@angular/core';
import { CARDS } from './mock-cards';
import { Card } from './card';

@Injectable()
export class CardService {
  getCards(): Promise<Card[]> {
    return Promise.resolve(CARDS);
  }
}