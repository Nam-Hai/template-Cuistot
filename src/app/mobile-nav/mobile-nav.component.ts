import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { Container } from '../animation/animation';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

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

  vitesseEcriture = 30;

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
  }

  @Output() close = new EventEmitter<boolean>();
  closeMobileNav(){
    this.close.emit(false);
  }

  scrollMenu() {
    this.closeMobileNav();
    if (this.router.url == '/Menu') {
      this.scroller.setOffset([0,200]);
      this.scroller.scrollToAnchor("Menu");

    }
  }

  modalState = false
  reservationModalToggle() {
    this.modalState = !this.modalState;
  }

  scrollContact() {
    this.scroller.scrollToAnchor("contact");
    this.closeMobileNav()
  }
}
