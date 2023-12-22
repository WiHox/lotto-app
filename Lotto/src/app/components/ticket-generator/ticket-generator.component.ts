import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { NumbersGridBoxComponent } from '../numbers-grid-box/numbers-grid-box.component';
import { SuperzahlComponent } from '../superzahl/superzahl.component';
import { TicketsModel } from 'src/app/models/ticketModel.model';

@Component({
  selector: 'app-ticket-generator',
  templateUrl: './ticket-generator.component.html',
  styleUrls: ['./ticket-generator.component.less'],
})
export class TicketGeneratorComponent implements OnInit {
  boxesCount = 0;
  inputNumberOfBoxes = 0;
  error = false;
  @ViewChildren(NumbersGridBoxComponent)
  numbersGridBoxes!: QueryList<NumbersGridBoxComponent>;
  @ViewChild(SuperzahlComponent) superzahlNumberComponent!: SuperzahlComponent;
  ticketModel: TicketsModel;

  constructor(private requestService: RequestService) {
    this.ticketModel = {id: 0,arraysOfNumbers: [], superzahl: 0} as TicketsModel;
  }

  ngOnInit(): void {
    this.requestService.getHello().subscribe((text) => console.log(text));
  }

  generateTicket() {
    if (Number(this.inputNumberOfBoxes) && this.inputNumberOfBoxes >= 0) {
      this.boxesCount = this.inputNumberOfBoxes;
      setTimeout(()=> this.saveTicket(), 2000);
    }
      
  }

  private saveTicket() {
    this.getData();
    this.requestService.postTicket(this.ticketModel).subscribe(() => {
      console.log('Ticket added succesfully');
    });
    this.ticketModel = {id: 0, arraysOfNumbers: [], superzahl: 0} as TicketsModel;
  }

  private getData() {
    this.numbersGridBoxes.forEach((box) => {
      this.ticketModel.arraysOfNumbers.push(box.selectedNumbers);
    });
    this.ticketModel.superzahl = this.superzahlNumberComponent.enteredNumber ? this.superzahlNumberComponent.enteredNumber : 0;
  }

}
