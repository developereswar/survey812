import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  public RegisterForm: FormGroup;
  public error: string;
  constructor(public fb: FormBuilder, private serv: ServicesService, public router: Router) {
    this.RegisterForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

   register(){
    let authorData = this.RegisterForm.value;
    this.serv.register(authorData);
  }
}
