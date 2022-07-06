export class Transaction{
  amount:string;
  category:string;
  money:number;
  description:string;
  payment:string;
  date:Date;
  note:string;

  constructor(
    amount:string,
    category:string,
    money:number,
    description:string,
    payment:string,
    date:Date,
    note:string = ''
  ){
    this.amount = amount;
    this.category = category;
    this.money = money;
    this.description = description;
    this.payment = payment;
    this.date = date;
    this.note = note;
  }
}