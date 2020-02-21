import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {User} from '../models/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Userlogin } from '../models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  checkLogin() {
    throw new Error("Method not implemented.");
  }

  AUTH_API_URL = `${environment.API_URL}`;

  userSubject: Subject<User> = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient
  ) {
    // this.checkLogin();
  }

  // checkLogin() {
  //   this.http.get(`${this.AUTH_API_URL}/checklogin`, {withCredentials: true})
  //     .subscribe((res: {success: boolean, user: User}) => {
  //       if (res.success) {
  //         this.userSubject.next(res.user);
  //       }
  //     });
  // }

  login(userlogin: Userlogin): Observable<{message: string}> {
    return this.http.post<{message: string}>(`${this.AUTH_API_URL}/customer-api/Customers/Login`, userlogin);
  }

  register(user: User): Observable<{message: string}> {
    return this.http.post<{message: string}>(`${this.AUTH_API_URL}/customer-api/Customer/Register`, user);
  }
}
