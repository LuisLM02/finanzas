import { Injectable } from '@angular/core';
import { Transaction } from '../Transaction';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private registers:Array<Transaction> = [
    new Transaction('mama', 'Comida', 200, 'Rappy', 'debit', new Date(), 'se compro hamburguesa'),
    new Transaction('papa', 'Botana', 100, 'Oxxo', 'cash', new Date(), 'se compro papitas'),
    new Transaction('abuela', 'Comida', 300, 'Aurrera', 'cash', new Date(), 'se compro pan'),
  ];
  
  constructor() { }

  getRegisters():Array<Transaction> {
    return this.registers;
  }

  addRegisters(amount:string, category:string, money:number, description:string, payment:string, date:string, note:string):void {
    let transition:Transaction = new Transaction(
      amount, 
      category, 
      money,
      description, 
      payment,
      new Date(date), 
      note
    );
    
    this.registers = [transition, ...this.registers];

    console.log(this.registers);
  }
}
