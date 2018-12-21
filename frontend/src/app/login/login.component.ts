import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../entities/user';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  @Input() user: User;
  model: User = new User();
  //@Output() onSubmit = new EventEmitter<User>();

  registration: boolean = false;
  labelSuccess: string = '';
  labesError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.user);
  }

  submit(form) {
    /*if (!form.valid) {
      return;
    }*/
    console.log(this, form);
    this.onSubmit();
  }

  async onSubmit() {
    const success = await this.authService.login(
      this.model.username,
      this.model.pass
    )
    if (success) {
      const url = this.authService.redirectUrl
        ? this.authService.redirectUrl
        : '/issues';
      this.router.navigate(["/message"])
    } else {
      this.labesError = 'Login failed!'
    }
  }

}
