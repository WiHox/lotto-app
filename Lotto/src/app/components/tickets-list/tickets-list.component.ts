import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketsModel } from 'src/app/models/ticketModel.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.less']
})
export class TicketsListComponent {
  
  tickets$ : Observable<TicketsModel[]>
  constructor(private requestService: RequestService) {
    this.tickets$ = requestService.getTickets();
  }
}
