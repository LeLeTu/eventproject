import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user';
import { Validators } from '@angular/forms';
import { Userlogin } from 'src/app/shared/models/userlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err = false;
  userlogin: Userlogin = {email:"", psw:""};
  

  constructor(
    private as: AuthService,
    private router: Router
  ) { }

  ngOnInit() {  }
  onSubmit(value) {
    this.userlogin.email = value.username;
    this.userlogin.psw = value.password;
    this.as.login(this.userlogin).subscribe(res => {
      console.log(res);
  
    })
  }

  onRegister() {
    this.router.navigate(['/users/register']);
  }

  updateErr() {
    if (this.err) {
      this.err = false;
    }
  }

}
