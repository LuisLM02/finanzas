import { Injectable } from '@angular/core';
import { Transaction } from '../Transaction';

interface filtersActiveInterface {
  filterAcount: Array<string>;
  filterInterval: Array<string>;
  filterCategory: Array<string>;
  filterPayment: Array<string>;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private editId!: number;

  private registers: Array<Transaction> = [
    new Transaction(
      'abuela',
      'games',
      300,
      'Aurrera',
      'Cash',
      new Date('2022-02-17T03:24:00'),
      'se compro pan'
    ),

    new Transaction(
      'mama',
      'food',
      200,
      'Rappy',
      'Debit',
      new Date('2022-03-17T03:02:00'),
      'se compro hamburguesa'
    ),
    new Transaction(
      'papa',
      'travel',
      100,
      'Oxxo',
      'Cash',
      new Date('2022-07-11T03:24:00'),
      'se compro papitas'
    ),
    new Transaction(
      'abuela',
      'games',
      300,
      'Aurrera',
      'Cash',
      new Date('2022-03-17T03:24:00'),
      'se compro pan'
    ),

    new Transaction(
      'papa',
      'food',
      2500,
      'Sams',
      'Debit',
      new Date('2022-04-17T03:24:00'),
      'se compro huevo, caja de leche, cajeta, nutella y cloro'
    ),

    new Transaction(
      'hijo',
      'games',
      1900,
      'Rame-ule',
      'Cash',
      new Date('2022-04-11T03:24:00'),
      'se compro colores, 5 libretas de cuadros, lapices'
    ),

    new Transaction(
      'hijo',
      'games',
      5000,
      'Blockbuster',
      'Debit',
      new Date('2022-07-03T03:24:00'),
      'F1, batman, spider-man, forza, assasin'
    ),

    new Transaction(
      'abuelo',
      'travel',
      4555,
      'Farmacia del ahorro',
      'Credit',
      new Date('2022-03-22T03:24:00'),
      'se compro fluoxetina, paracetamol, aspirina, topiramato, electrolitos'
    ),

    new Transaction(
      'hijo',
      'food',
      10000,
      'Mantenimeinto',
      'Cash',
      new Date('2022-02-26T03:24:00'),
      'se le dio mantenimiento y se pinto el carro'
    ),
  ];

  private filtersActive: filtersActiveInterface = {
    filterAcount: [],
    filterInterval: [],
    filterCategory: [],
    filterPayment: [],
  };

  constructor() {}

  addRegisters(
    acount: string,
    category: string,
    spent: number,
    description: string,
    payment: string,
    date: string,
    note: string
  ): void {
    let transition: Transaction = new Transaction(
      acount,
      category,
      spent,
      description,
      payment,
      new Date(date),
      note
    );

    this.registers = [transition, ...this.registers];
  }
  editRegisters(newRegister: Transaction): void {
    for (let register of this.registers) {
      if (register.id === newRegister.id) {
        register = newRegister;
      }
    }
  }

  getUsers(): Array<{ name: string; avatar: string }> {
    return [
      { name: 'mama', avatar: '../../assets/25 Avatar pollo 2.svg' },
      { name: 'papa', avatar: '../../assets/25 Avatar pollo 2.svg' },
      { name: 'abuelo', avatar: '../../assets/25 Avatar pollo 2.svg' },
      { name: 'abuela', avatar: '../../assets/25 Avatar pollo 2.svg' },
      { name: 'hijo', avatar: '../../assets/25 Avatar pollo 2.svg' },
    ];
  }
  getRegisters(): Array<Transaction> {
    let results: Array<Transaction> = Object.values(this.registers);

    if (this.filtersActive.filterAcount.length > 0) {
      let request: Array<Transaction> = [];
      this.filtersActive.filterAcount.forEach(ele => {
        let answer = results.filter(item => item.acount === ele);
        request = request.concat(answer);
      });
      results = request;
    }

    if (this.filtersActive.filterInterval.length > 0) {
      let answer: Array<Transaction>;
      let request: Array<Transaction> = [];
      let day: number = 1000 * 60 * 60 * 24;

      this.filtersActive.filterInterval.forEach(ele => {
        if (ele === 'week') {
          answer = results.filter(
            item => item.date.getTime() > new Date().getTime() - day * 7
          );
        }
        if (ele === 'mounth') {
          answer = results.filter(
            item => item.date.getTime() > new Date().getTime() - day * 31
          );
        }
        if (ele === 'tree-mounths') {
          answer = results.filter(
            item => item.date.getTime() > new Date().getTime() - day * 90
          );
        }
        if (ele === 'year') {
          answer = results.filter(
            item => item.date.getTime() > new Date().getTime() - day * 365
          );
        }

        request = request.concat(answer);
      });
      results = request;
    }

    if (this.filtersActive.filterCategory.length > 0) {
      let request: Array<Transaction> = [];
      this.filtersActive.filterCategory.forEach(ele => {
        let answer = results.filter(item => item.category === ele);
        request = request.concat(answer);
      });
      results = request;
    }

    if (this.filtersActive.filterPayment.length > 0) {
      let request: Array<Transaction> = [];
      this.filtersActive.filterPayment.forEach(ele => {
        let answer = results.filter(item => item.payment === ele);
        request = request.concat(answer);
      });
      results = request;
    }

    return results;
  }

  getCategory(): Array<string> {
    return ['food', 'games', 'travel', 'entertainment', 'education'];
  }
  getPayment(): Array<string> {
    return ['Cash', 'Credit', 'Debit'];
  }

  getEdit(): Transaction {
    let transaction!: Transaction;

    for (const register of this.registers) {
      if (register.id === this.editId) {
        transaction = register;
      }
    }

    return transaction;
  }
  setEdit(id: number): void {
    this.editId = id;
  }

  setFilter(filters: filtersActiveInterface) {
    this.filtersActive = filters;
    console.log(this.filtersActive);
  }
}
