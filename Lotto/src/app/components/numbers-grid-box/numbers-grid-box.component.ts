import { Component, Input, OnInit } from '@angular/core';
import { RandomNumberGeneratorService } from 'src/app/services/random-number-generator.service';

@Component({
  selector: 'app-numbers-grid-box',
  templateUrl: './numbers-grid-box.component.html',
  styleUrls: ['./numbers-grid-box.component.less'],
})
export class NumbersGridBoxComponent implements OnInit {
  @Input() ticketNumber!: number;
  selectedNumbers: number[] = [];
  numbers = Array.from({ length: 49 }, (_, i) => i + 1);

  constructor(private lottoNumbersGenerator: RandomNumberGeneratorService) {}
  
  ngOnInit(): void {
    this.selectedNumbers = this.lottoNumbersGenerator.generateSortedLottoNumbers();
    console.log(this.selectedNumbers);
  }
}
