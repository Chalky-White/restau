import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  menus = [
    { entrée: 'carottes rappées', resistance: 'steak frites'},
    { entrée: 'tartare de saumon', resistance: 'grande salade de chèvre'},
    { entrée: 'salade niçoise', resistance: 'haricotse & côte de porc'},
    { entrée: 'potage', resistance: 'fondue savoyarde'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
