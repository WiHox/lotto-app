import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less'],
})
export class TicketComponent implements OnChanges {
  @Input() boxesCount!: Number;
  generatingItterationsCount: Number[] = [];

  ngOnChanges(): void {
    this.generatingItterationsCount = new Array(this.boxesCount);
    console.log(this.boxesCount);
  }
}
