import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numbers-grid-box',
  templateUrl: './numbers-grid-box.component.html',
  styleUrls: ['./numbers-grid-box.component.less'],
})
export class NumbersGridBoxComponent {
  @Input({required: true}) ticketNumber!: number;
  selectedNumbers: boolean[] = [];
  numbers = Array.from({ length: 49 }, (_, i) => i + 1);
  countSelectedNumbers = 0;

  inputChange() {
    setTimeout(() => {
      console.log(this.selectedNumbers);
      this.countSelectedNumbers =
        this.selectedNumbers.filter((value) => value === true).length;
      console.log(this.countSelectedNumbers);
    }, 50);
  }
}
