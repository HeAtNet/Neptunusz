import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};
export const guestHttpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: User = null;
  redirectUrl: string;
  private usersUrl = 'http://localhost:8080/user/login';

  constructor(
    private http: HttpClient
  ) { }

  async login(username: string, password: string): Promise<boolean> {
    const token = btoa(`${username}:${password}`);
    httpOptions.headers =
      httpOptions.headers.set(
        'Authorization',
        `Basic ${token}`
      );
      console.log(httpOptions.headers)
    try {
      const user = await this.http.post<User>(
        `${this.usersUrl}`,
        {

        },
        httpOptions
      ).toPromise();
      this.user = user;
      return Promise.resolve(true);
    } catch (e) {
      console.log('hiba', e);
      return Promise.resolve(false);
    }
  }

  logout() {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.user = null;
  }

  isLoggedIn() {
    return this.user != null;
  }
}
