import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'udemy app';
  username:string = '';
  canSubmitUsername:boolean = false;
  detailButtonClickEvents:Array<object> = [];
  detailsShouldBeShown:boolean = true;

  onInputChange() {
    this.canSubmitUsername = this.username.length > 0;
  }

  resetUsername() {
    this.username = '';
  }

  displayDetails(event:Event) {
    this.detailsShouldBeShown = !this.detailsShouldBeShown;
    this.detailButtonClickEvents.push(event);
  }
}
