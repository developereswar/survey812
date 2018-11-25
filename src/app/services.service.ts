import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  login(data){
    let url = "http://localhost:8008/api/user/login";
    return this.http.post(url,data);
  }

  register(data){
    let url = "http://localhost:8008/api/user/register";
    return this.http.post(url,data);
  }
}
