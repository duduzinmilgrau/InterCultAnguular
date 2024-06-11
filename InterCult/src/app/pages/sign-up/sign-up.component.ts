import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  logo: string = 'assets/intercultlogo.png';
  imgLogin: string = 'assets/fotinho.png';


  constructor(private router: Router) {
  }

  user = {
    email: '',
    name: '',
    password1: '',
    password2: ''
  };


  onSubmit() {
    if (this.user.password1 != this.user.password2) {
      alert('As senhas não coincidem');
    } else {
      if (this.user.email && this.user.name && this.user.password1) {
        this.addUser(this.user);

        console.log('foi')
      }
    }
  }

  addUser(user: { email: string; name: string; password1: string; password2: string; }) {
    const usersJson = localStorage.getItem('users');
    let users: any[] = usersJson ? JSON.parse(usersJson) : [];

    const existingUserIndex = users.findIndex((u: any) => u.email === user.email);
    if (existingUserIndex !== -1) {
      alert('Já existe um usuário cadastrado com este email');

      return; 
    }
    alert('Usuário cadastrado');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    this.showUsers(users);
    this.router.navigate(['']);
  }

  showUsers(users: any[]): void {
    let usersInfo = "Itens do banco:\n";
    users.forEach((user, index) => {
      usersInfo += `Usuário ${index + 1}:\n`;
      usersInfo += `Nome: ${user.name}\n`;
      usersInfo += `Email: ${user.email}\n`;
      usersInfo += `Senha: ${user.password1}\n\n`;
    });
    alert(usersInfo);
  }
}