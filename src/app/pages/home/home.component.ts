import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  widgetTitle: string = 'Dashboard';
  widgetSubTitle: string = 'Welcome to the unique Material Design admin web app experience!';

  constructor() { }

  ngOnInit() {
      
  }

}
