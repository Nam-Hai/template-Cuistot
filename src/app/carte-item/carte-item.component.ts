import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-item',
  templateUrl: './carte-item.component.html',
  styleUrls: ['./carte-item.component.scss']
})
export class CarteItemComponent implements OnInit {
  @Input() carteItemName !: string;
  @Input() price !: string;
  @Input() carteItemNote !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
