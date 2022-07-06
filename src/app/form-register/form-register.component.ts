import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  transactionForm!: FormGroup;

  constructor(private miService: DataService, private router: Router, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    /* event.preventDefault();
    this.miService.addRegisters(
      (<HTMLFormElement>event.target)['amount'].value,
      (<HTMLFormElement>event.target)['category'].value,
      (<HTMLFormElement>event.target)['import'].value,
      (<HTMLFormElement>event.target)['date'].value,
      (<HTMLFormElement>event.target)['notes'].value,
    ); */

    this.router.navigate(['/register']);
  }
}
