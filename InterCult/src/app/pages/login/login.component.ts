import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logo: string = 'assets/intercultlogo.png';
  imgLogin: string = 'assets/fotinho.png';

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    const usersJson = localStorage.getItem('users');
    if (!usersJson) {
      alert("Nenhum usuário registrado");
      return;
    }

    const users: any[] = JSON.parse(usersJson);
    const user = users.find((user: { email: string; password1: string; }) => 
      user.email === this.username && user.password1 === this.password
    );

    if (user) {
      alert("Login bem-sucedido");
      localStorage.setItem('currentUserName', user.name); 
      this.router.navigate(['home']);
    } else {
      alert("Credenciais inválidas");
    }
  }
}