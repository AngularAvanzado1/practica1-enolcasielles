import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ecm-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() object: Object;
  @Output() clickCard: EventEmitter<Object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickCard() {
    this.clickCard.emit(this.object);
  }

}
