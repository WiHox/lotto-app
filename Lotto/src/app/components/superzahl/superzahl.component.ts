import { Component } from '@angular/core';

@Component({
  selector: 'app-superzahl',
  templateUrl: './superzahl.component.html',
  styleUrls: ['./superzahl.component.less'],
})
export class SuperzahlComponent {
  enteredNumber: number | undefined = undefined;
  isInvalidNumber: boolean = true;

  validateInput() {
    if (this.enteredNumber)
      if (
        this.enteredNumber < 1 ||
        this.enteredNumber > 9 ||
        isNaN(this.enteredNumber)
      ) {
        this.isInvalidNumber = true;
      } else {
        this.isInvalidNumber = false;
      }
  }
}
