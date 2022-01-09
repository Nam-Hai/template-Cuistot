import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, sequence } from '@angular/animations';
import { Container } from '../animation/animation';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('hamburgerHautTrigger', [
      state('open',style({
        transform: "translateY(0) rotate(-135deg)"
      })),
      transition('close => open', [
        sequence([
          animate('100ms', style({transform: "translateY(0)"})),
          animate('200ms', style({transform: "translateY(0)"})),
          animate('150ms', style({transform: "translateY(0) rotate(-135deg)"})),
        ])
      ]),
      transition('open => close', [
        sequence([
          animate('100ms', style({transform: "translateY(0)"})),
          animate('200ms', style({transform: "translateY(0)"})),
          animate('100ms', style({transform: "translateY(0.5rem)"})),
        ])
      ])
    ]),
    trigger('hamburgerBasTrigger', [
      state('open',style({
        transform: "translateY(0) rotate(135deg)",
        width: '2rem'
      })),
      transition('close => open', [
        sequence([
          animate('100ms', style({transform: "translateY(0)", width: '2rem'})),
          animate('200ms', style({transform: "translateY(0)", width: '2rem'})),
          animate('150ms', style({transform: "translateY(0) rotate(-135deg)"})),
        ])
      ]),
      transition('open => close', [
        sequence([
          animate('100ms', style({transform: "translateY(0)"})),
          animate('200ms', style({transform: "translateY(0)", width: "2rem"})),
          animate('100ms', style({transform: "translateY(-0.5rem)", width: "2rem"})),
          animate('200ms'),
          animate('200ms', style({width: "1.5rem"}))
        ])
      ])
    ]),
    trigger('hamburgerMidTrigger', [
      state('open',style({
        transform: "rotate(135deg)",
        width: '2rem'
      })),
      transition('close => open', [
        sequence([
          animate('100ms', style({width: '2rem'})),
          animate('200ms', style({width: '2rem'})),
          animate('150ms', style({transform: "rotate(-135deg)"})),
        ])
      ]),
      transition('open => close', [
        sequence([
          animate('100ms', style({transform: "translateY(0)"})),
          animate('500ms', style({width: "2rem"})),
          animate('200ms', style({width: "1rem"})),
        ])
      ])
    ]),
    Container
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hamburgerState = false;
  toggleHamburgerMenu() {
    this.hamburgerState = !this.hamburgerState;
  }


  
}
