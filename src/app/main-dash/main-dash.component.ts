import { Component, OnInit } from '@angular/core';
import { QuickLunchService } from '../services/quick-lunch.service'
import { Food} from '../models/food.interface'

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [
          { title: 'Burgers', cols: 2, rows: 1, id: 'burg' },
          { title: 'Galettes & Crêpes', cols: 2, rows: 1, id: "gal" },
          { title: 'Pizzas', cols: 2, rows: 1, id: "piz"  }
        ];

        burgers: Food[];
        pizzas: Food[];
        galettes: Food[];

constructor(private qls: QuickLunchService){}

        ngOnInit() {
          this.burgers = this.qls.getBurgers();
          this.pizzas = this.qls.getPizzas();
          this.galettes = this.qls.getGalettes();
        }
      }
