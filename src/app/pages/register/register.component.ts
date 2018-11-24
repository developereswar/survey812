import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  public RegisterForm: FormGroup;
  public error: string;
  constructor(public fb: FormBuilder) {
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
    console.log(authorData)
  }
}
