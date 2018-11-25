import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public modalclose:string;
  public error: string;
  constructor(public fb: FormBuilder, public serv: ServicesService) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  login() {
    let authorData = this.loginForm.value;
    this.serv.login(authorData).subscribe(data => {
      console.log(data);
    });
  }
}
