import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomNumberGeneratorService {
  readonly intervalHighestNumber = 49;
  readonly numbersToGenerate = 6;
  constructor() {}

  generateSortedLottoNumbers(
    numbersToGenerate = this.numbersToGenerate,
    maxNumber = this.intervalHighestNumber
  ): number[] {
    const genetaredNumbers: number[] = [];

    while (genetaredNumbers.length < numbersToGenerate) {
      const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
      if (genetaredNumbers.indexOf(randomNumber) === -1) {
        genetaredNumbers.push(randomNumber);
      }
    }

    genetaredNumbers.sort((a,b)=> a-b);

    return genetaredNumbers;
  }
}
