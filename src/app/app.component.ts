import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: [
      {name: "Illidan", type: "creature", attack: "7", defense: "7", picture: 'illidan.jpg'},
      {name: "Arthas", type: "creature", attack: "4", defense: "8", picture: 'arthas.jpg'}, 
      {name: "Sylvanas", type: "creature", attack: "6", defense: "5", picture: 'sylvanas.jpg'},
      {name: "Thrall", type: "creature", attack: "6", defense: "5", picture: 'thrall.jpg'},
      {name: "Kael Thas", type: "creature", attack: "6", defense: "5", picture: 'kael-thas.jpg'},
      {name: "Cairne", type: "creature", attack: "6", defense: "5", picture: 'cairne.jpg'},
      {name: "Jaina", type: "creature", attack: "6", defense: "5", picture: 'jaina.jpg'}, 
      {name: "Leroy Jenkins", type: "creature", attack: "9", defense: "1", picture: 'leroy-jenkins.jpg'}
  ];
}
