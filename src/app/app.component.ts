import { Component } from '@angular/core';

@Component({
  selector: 'Main',
  //templateUrl: './app.component.html',
  template : '<h1> Bonjour {{title}} dans ANGULAR',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ODDO-BHF';
}
