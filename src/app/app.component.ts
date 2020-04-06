import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feautureItem: string;

  menuItemCallBack = event => {
    console.log(event);
    this.feautureItem = event.feature;
  };
}
