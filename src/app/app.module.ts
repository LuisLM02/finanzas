import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CountsComponent } from './counts/counts.component';
import { RegisterComponent } from './register/register.component';
import { FormRegisterComponent } from './register/form-register/form-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardTransactionComponent } from './register/card-transaction/card-transaction.component';
import { FiltersComponent } from './register/filters/filters.component';
import { FormEditComponent } from './register/form-edit/form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CountsComponent,
    RegisterComponent,
    FormRegisterComponent,
    CardTransactionComponent,
    FiltersComponent,
    FormEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
