import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-card-transaction',
  templateUrl: './card-transaction.component.html',
  styleUrls: ['./card-transaction.component.scss']
})
export class CardTransactionComponent implements OnInit {
  transactions!: Array<Transaction>;

  constructor(private miService: DataService) { }

  ngOnInit(): void {
    this.transactions = this.miService.getRegisters();
  }

}
