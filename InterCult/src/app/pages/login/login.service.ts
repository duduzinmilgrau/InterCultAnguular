import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private username: string = '';
  private password: string = '';

  constructor() {}

  setUsername(username: string): void {
    this.username = username;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }
}