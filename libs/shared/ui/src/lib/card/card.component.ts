import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ecm-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() object: Object;
  @Input() clickable: boolean;
  @Output() clickCard: EventEmitter<Object> = new EventEmitter();

  constructor() {
    this.clickable = true;
  }

  ngOnInit() {}

  onClickCard() {
    this.clickCard.emit(this.object);
  }

}
