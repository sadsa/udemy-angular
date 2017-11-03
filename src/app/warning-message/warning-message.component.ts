import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warning-message',
  templateUrl: './warning-message.component.html',
  styleUrls: ['./warning-message.component.css']
})
export class WarningMessageComponent implements OnInit {
  message:string = 'OMG an error ocurred!';

  constructor() { }

  ngOnInit() {
  }

}
