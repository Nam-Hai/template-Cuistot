import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-item',
  templateUrl: './carte-item.component.html',
  styleUrls: ['./carte-item.component.scss']
})
export class CarteItemComponent implements OnInit {


  carteItemName = 'Ramen au porc';
  price = '15$';
  carteItemNote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  constructor() { }

  ngOnInit(): void {
  }

}
