import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { TypetestComponent } from './pages/typetest/typetest.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';

// loyout
import { DefaultComponent } from './layouts/default/default.component';


const routes: Routes = [
  {
    component: DefaultComponent,
    path:'',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'surveytest',
        component: TypetestComponent
      }
    ]
  },
  {
    component: RegisterComponent,
    path:'register'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const Components = [
  HomeComponent,
  DefaultComponent,
  LoginComponent,
  RegisterComponent,
  TypetestComponent,
  HeaderComponent,
  FooterComponent
]