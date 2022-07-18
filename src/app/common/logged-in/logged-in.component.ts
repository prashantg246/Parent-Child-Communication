import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../Services/logger.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css'],
})
export class LoggedInComponent implements OnInit {
  users: any[] = [
    {
      userId: 'Test 1',
      status: 'LoggedIn',
    },
    {
      userId: 'Test 3',
      status: 'LoggedIn',
    },
    {
      userId: 'Test 2',
      status: 'LoggedIn',
    },
    {
      userId: 'Test 4',
      status: 'LoggedIn',
    },
  ];

  constructor(private logger: LoggerService) {}

  ngOnInit() {}

  blockUser(index: number) {
    this.users[index].status = 'blocked';
    //log to server
    this.logger.logToServer(`${this.users[index].userId} is blocked!`);
  }
}
