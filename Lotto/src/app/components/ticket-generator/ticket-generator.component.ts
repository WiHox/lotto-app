import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-ticket-generator',
  templateUrl: './ticket-generator.component.html',
  styleUrls: ['./ticket-generator.component.less']
})
export class TicketGeneratorComponent implements OnInit {
  boxesCount = 4;

  /**
   *
   */
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getHello().subscribe(text => console.log(text));
  }

  persistTicket() {
    //send request to the server
  }
}
