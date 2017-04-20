import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header.component';
import { CardComponent } from './cards/card.component';
import { CollectionComponent } from './collection/collection.component';
import { CardsListComponent } from './cards/cards-list.component';
import { AddCardComponent } from './cards/add-card.component';
import { CardService } from './cards/card.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CollectionComponent,
    CardsListComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
