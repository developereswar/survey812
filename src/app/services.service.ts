import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  login(data){
    let url = "https://survey8122.herokuapp.com/api/user/login";
    return this.http.post(url,data);
  }

  register(data){
    let url = "https://survey8122.herokuapp.com/api/user/register";
    return this.http.post(url,data);
  }
}
