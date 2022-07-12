import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  transactionForm!: FormGroup;
  inputValidation: Array<boolean> = [false, false, false, false, false, false];
  acounts: Array<{ name: string; avatar: string }> = this.miService.getUsers();
  categorys: Array<string> = this.miService.getCategory();
  payments: Array<string> = this.miService.getPayment();

  constructor(
    private miService: DataService,
    private router: Router,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.transactionForm = this.initForm();
  }

  onSubmit(): void {
    console.log(this.transactionForm.get('date')?.value);
    if (this.setValidation('acount', 0)) return;
    if (this.setValidation('category', 1)) return;
    if (this.setValidation('description', 2)) return;
    if (this.setValidation('payment', 3)) return;
    if (this.setValidation('import', 4)) return;
    if (this.setValidation('date', 5)) return;

    if (this.transactionForm.valid) {
      this.miService.addRegisters(
        this.transactionForm.get('acount')?.value,
        this.transactionForm.get('category')?.value,
        this.transactionForm.get('import')?.value,
        this.transactionForm.get('description')?.value,
        this.transactionForm.get('payment')?.value,
        this.transactionForm.get('date')?.value,
        this.transactionForm.get('note')?.value
      );

      this.router.navigate(['/register']);
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      acount: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      import: [, [Validators.required]],
      date: ['', [Validators.required]],
      note: ['', []],
    });
  }

  setValidation(input: string, index: number): boolean {
    if (!this.transactionForm.get(input)?.value) {
      this.inputValidation[index] = true;
      return true;
    } else {
      this.inputValidation[index] = false;
    }
    return false;
  }
}
