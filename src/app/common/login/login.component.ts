import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../Services/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name: string = '';
  constructor(private logger: LoggerService) {}

  ngOnInit() {}

  login() {
    //login Api

    this.logger.logToServer(`${this.name} has tried to logged in`);
  }
}
