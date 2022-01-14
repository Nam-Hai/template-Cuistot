import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-section',
  templateUrl: './carte-section.component.html',
  styleUrls: ['./carte-section.component.scss']
})
export class CarteSectionComponent implements OnInit {

  carteSection = 'Ramen'
  constructor() { }

  ngOnInit(): void {
  }

}
