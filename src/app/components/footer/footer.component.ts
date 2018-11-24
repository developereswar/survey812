import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public workers: any;
  constructor() { }

  ngOnInit() {
    var a = (Math.floor(100000 + Math.random() * 900000)).toString();
    a = a.substring(-2);
    this.workers = a;
  }
  onRightClick() {
    return false;
  }
}
