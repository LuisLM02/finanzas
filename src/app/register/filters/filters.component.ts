import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  acount: boolean = false;
  interval: boolean = false;
  category: boolean = false;
  payment: boolean = false;

  filters = {
    acounts: [],
    intervals: [],
    categorys: [],
    payments: [],
  };
  acounts: Array<{ name: string; avatar: string }> = this.miService.getUsers();
  intervals: Array<{ value: string; text: string }> = [
    { value: 'week', text: 'last 7 days' },
    { value: 'mounth', text: 'last 31 days' },
    { value: 'tree-mounths', text: 'last 90 days' },
    { value: 'year', text: 'last 12 mounths' },
  ];
  categorys: Array<string> = this.miService.getCategory();
  payments: Array<string> = this.miService.getPayment();
  filtersActive: {
    filterAcount: Array<string>;
    filterInterval: Array<string>;
    filterCategory: Array<string>;
    filterPayment: Array<string>;
  } = {
    filterAcount: [],
    filterInterval: [],
    filterCategory: [],
    filterPayment: [],
  };

  constructor(private miService: DataService) {}

  ngOnInit(): void {}

  visibility(element: string): void {
    if (element === 'acounts') this.acount = !this.acount;
    if (element === 'intervals') this.interval = !this.interval;
    if (element === 'categorys') this.category = !this.category;
    if (element === 'payments') this.payment = !this.payment;
  }

  addFilterAcount(item: string) {
    let index: number = this.filtersActive.filterAcount.findIndex(
      ite => ite === item
    );

    if (index === -1) {
      this.filtersActive.filterAcount.push(item);
      this.miService.setFilter(this.filtersActive);
    }
    if (index !== -1) {
      this.filtersActive.filterAcount = this.filtersActive.filterAcount.filter(
        it => it !== item
      );
      this.miService.setFilter(this.filtersActive);
    }
  }

  addFilterInterval(item: string) {
    let index: number = this.filtersActive.filterInterval.findIndex(
      ite => ite === item
    );

    if (index === -1) {
      this.filtersActive.filterInterval.push(item);
      this.miService.setFilter(this.filtersActive);
    }
    if (index !== -1) {
      this.filtersActive.filterInterval =
        this.filtersActive.filterInterval.filter(it => it !== item);
      this.miService.setFilter(this.filtersActive);
    }
  }

  addFilterCategory(item: string) {
    let index: number = this.filtersActive.filterCategory.findIndex(
      ite => ite === item
    );

    if (index === -1) {
      this.filtersActive.filterCategory.push(item);
      this.miService.setFilter(this.filtersActive);
    }
    if (index !== -1) {
      this.filtersActive.filterCategory =
        this.filtersActive.filterCategory.filter(it => it !== item);
      this.miService.setFilter(this.filtersActive);
    }
  }

  addFilterPayment(item: string) {
    let index: number = this.filtersActive.filterPayment.findIndex(
      ite => ite === item
    );

    if (index === -1) {
      this.filtersActive.filterPayment.push(item);
      this.miService.setFilter(this.filtersActive);
    }
    if (index !== -1) {
      this.filtersActive.filterPayment =
        this.filtersActive.filterPayment.filter(it => it !== item);
      this.miService.setFilter(this.filtersActive);
    }
  }
}
