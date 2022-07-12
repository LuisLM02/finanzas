export class Transaction {
  id: number;
  acount: string;
  category: string;
  spent: number;
  description: string;
  payment: string;
  date: Date;
  note: string;

  constructor(
    acount: string,
    category: string,
    spent: number,
    description: string,
    payment: string,
    date: Date,
    note: string = ''
  ) {
    this.id = Math.random() * (1000 - 1) + 1;
    this.acount = acount;
    this.category = category;
    this.spent = spent;
    this.description = description;
    this.payment = payment;
    this.date = date;
    this.note = note;
  }
}
