import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NumbersGridBoxComponent } from '../numbers-grid-box/numbers-grid-box.component';
import { SuperzahlComponent } from '../superzahl/superzahl.component';
import { TicketsModel } from 'src/app/models/ticketModel.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less'],
})
export class TicketComponent implements OnChanges {
  @Input() boxesCount!: Number;
 

  generatingItterationsCount: Number[] = [];

  isError = false;

  ngOnChanges(): void {
    this.generatingItterationsCount = new Array(this.boxesCount);
  }

  
}
