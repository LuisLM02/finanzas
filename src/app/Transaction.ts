export class Transaction{
  amount:string;
  category:string;
  money:number;
  date:Date;
  note:string;

  constructor(
    amount:string,
    category:string,
    money:number,
    date:Date,
    note:string = ''
  ){
    this.amount = amount;
    this.category = category;
    this.money = money;
    this.date = date;
    this.note = note;
  }
}