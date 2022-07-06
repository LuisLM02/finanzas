import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountsComponent } from './counts/counts.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'counts', component: CountsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register/form', component: FormRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
