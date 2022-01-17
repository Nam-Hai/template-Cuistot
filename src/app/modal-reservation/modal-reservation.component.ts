import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-reservation',
  templateUrl: './modal-reservation.component.html',
  styleUrls: ['./modal-reservation.component.scss']
})
export class ModalReservationComponent implements OnInit {

  @Output() modalClose = new EventEmitter<boolean>();

  deleteRequest() {
    this.modalClose.emit(false);
  }

  constructor() { }

  ngOnInit(): void {
  }

  
}
