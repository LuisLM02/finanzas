import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  visibility: boolean = false;
  filter: string = '';
  money: number = 0;

  transactions: Array<Transaction> = Object.values(
    this.miService.getRegisters()
  );
  acounts: Array<{ name: string; avatar: string }> = this.miService.getUsers();

  constructor(private miService: DataService) {}

  ngOnInit(): void {
    this.transactions = Object.values(this.miService.getRegisters()).reverse();
    this.orderTransanction();

    for (const transaction of this.transactions) {
      this.money += transaction.spent;
    }
  }

  changeVisibility() {
    this.visibility = !this.visibility;
    this.filter = '';
    this.orderTransanction();
  }
  onFilter(filter: string): void {
    this.filter = filter;
    this.visibility = false;
    this.orderTransanction();
  }

  orderTransanction(): void {
    if (this.filter === 'Most Recent' || this.filter === '') this.mostRecent();
    if (this.filter === 'Less Recent') this.lessRecent();
    if (this.filter === 'Higher Amount') this.higherMount();
    if (this.filter === 'Smaller Amount') this.smalleramount();
  }
  mostRecent(): void {
    this.transactions
      .sort((a: Transaction, b: Transaction): number => {
        return a.date.getTime() - b.date.getTime();
      })
      .reverse();
  }
  lessRecent(): void {
    this.transactions.sort((a: Transaction, b: Transaction): number => {
      return a.date.getTime() - b.date.getTime();
    });
  }
  higherMount(): void {
    this.transactions
      .sort((a: Transaction, b: Transaction): number => {
        return a.spent - b.spent;
      })
      .reverse();
  }
  smalleramount(): void {
    this.transactions.sort((a: Transaction, b: Transaction): number => {
      return a.spent - b.spent;
    });
  }
}
