import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  dogs = [
    { race: 'berger allemand', name: 'dingo'},
    { race: 'épagneul', name: 'médor'},
    { race: 'caniche', name: 'Peter'},
    { race: 'labrador', name: 'Fonzy'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
