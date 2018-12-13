import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../entities/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  @Input() user: User;
  model: User = new User();
  @Output() onSubmit = new EventEmitter<User>();

  registration: boolean = false;
  labelSuccess: string = '';
  labesError: string = '';

  constructor() {
    //console.log(this.model);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.user);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    //console.log(this.model);
    this.onSubmit.emit(this.model);
  }

}
