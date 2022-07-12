import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/Transaction';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss'],
})
export class FormEditComponent implements OnInit {
  register: Transaction = this.miService.getEdit();
  categorys: Array<string> = this.miService.getCategory();
  acounts: Array<{ name: string; avatar: string }> = this.miService.getUsers();
  payments: Array<string> = this.miService.getPayment();

  editForm!: FormGroup;
  inputValidation: Array<boolean> = [false, false, false, false, false, false];

  constructor(
    private miService: DataService,
    private router: Router,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.editForm = this.initForm();
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.register.acount = this.editForm.get('acount')?.value;
      this.register.category = this.editForm.get('category')?.value;
      this.register.spent = this.editForm.get('spent')?.value;
      this.register.description = this.editForm.get('description')?.value;
      this.register.payment = this.editForm.get('payment')?.value;
      this.register.date = new Date(this.editForm.get('date')?.value);
      this.register.note = this.editForm.get('note')?.value;

      this.miService.editRegisters(this.register);

      this.router.navigate(['/register']);
    }
  }

  initForm(): FormGroup {
    let date = this.register.date,
      dateString = `${date.getFullYear()}-${(
        '0' +
        (date.getMonth() + 1)
      ).substr(-2)}-${('0' + date.getDate()).substr(-2)}T${(
        '0' + date.getHours()
      ).substr(-2)}:${('0' + date.getMinutes()).substr(-2)}:${(
        '0' + date.getSeconds()
      ).substr(-2)}`;

    return this.fb.group({
      acount: [this.register.acount, [Validators.required]],
      category: [this.register.category, [Validators.required]],
      description: [this.register.description, [Validators.required]],
      payment: [this.register.payment, [Validators.required]],
      spent: [this.register.spent, [Validators.required]],
      date: [dateString, [Validators.required]],
      note: [this.register.note, []],
    });
  }
}
