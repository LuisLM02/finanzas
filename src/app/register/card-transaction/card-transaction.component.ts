import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Transaction } from '../../Transaction';

@Component({
  selector: 'app-card-transaction',
  templateUrl: './card-transaction.component.html',
  styleUrls: ['./card-transaction.component.scss'],
})
export class CardTransactionComponent implements OnInit {
  @Input() transactions!: Array<Transaction>;

  constructor(private miService: DataService, private router: Router) {}

  ngOnInit(): void {}

  editRegister(transaction: Transaction): void {
    this.miService.setEdit(transaction.id);
    this.router.navigate(['/register/edit']);
  }
}
