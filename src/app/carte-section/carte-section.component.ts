import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-section',
  templateUrl: './carte-section.component.html',
  styleUrls: ['./carte-section.component.scss']
})
export class CarteSectionComponent implements OnInit {
  @Input() carteSection !: string;
  @Input() sectionJSON !: any;

  constructor() { }

  ngOnInit(): void {
  }


}
