import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  username = '';
  allowSubmit = true;
  clicked = false;
  logs = [];

  onToggleDetails() {
    this.clicked = !this.clicked;
    this.logs.push(new Date());
  }

  constructor() {}

  ngOnInit(): void {}
}
