import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err = false;
  registerFormGroup: FormGroup;
  user: User = {name:"", email:"", psw:"", phone:""};
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      name: '',
      email: '',
      phone: '',
      passwordGroup: this.fb.group({
        password: '',
        confirm_password: ''
      }, {validator: this.passwordValidator})
    });
  }

  onSubmit() {
    if (this.registerFormGroup.valid) {
      const {name, email, phone, passwordGroup: {password}} = this.registerFormGroup.value;
      this.user.name = name;
      this.user.email = email;
      this.user.phone = phone;
      this.user.psw = password;
      this.authService.register(this.user)
        .subscribe(res => {
          console.log(res);
        });
    } else {
      return false;
    }
  }

  passwordValidator({value}: FormGroup) {
    const {password, confirm_password} = value;
    return password === confirm_password ? null : {passwordGroup: 'Passwords don\'t match!'};
  }

}
