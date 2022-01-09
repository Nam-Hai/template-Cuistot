import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { Container } from '../animation/animation';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  animations: [
    trigger('mobileMenuToggle', [
      transition(':enter', [
        style({
          opacity: "0"
        }),
        animate('400ms', style({opacity: '1'}))
      ]),
      transition(':leave', [

        animate('400ms', style({opacity: '0'}))
      ])
    ]),
    trigger('typeMachineAnimation', [
      transition(':enter', [
        
        style({opacity : 0}),
        animate('1ms {{lenght}}ms', style({opacity: 1}))
        
      ], {params : { lenght: 50}})
    ])
  ]

})
export class MobileNavComponent implements OnInit {

  vitesseEcriture = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
