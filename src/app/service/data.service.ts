import { Injectable } from '@angular/core';
import { Transaction } from '../Transaction';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private registers:Array<Transaction> = [];
  
  constructor() { }

  getRegisters():Array<Transaction> {
    return this.registers;
  }

  addRegisters(amount:string, category:string, money:number, date:string, note:string = ""):void {
    let transition:Transaction = new Transaction(amount, category, money, new Date(date), note);
    this.registers.push(transition);

    console.log(this.registers);
  }
}
