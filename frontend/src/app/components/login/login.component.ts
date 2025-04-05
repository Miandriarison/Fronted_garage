import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LocalStorageService } from '../../services/local-storage.service';
// import { environment } from '../../environments/environment'; 
@Component({
  selector: 'app-login',
  imports:  [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = { email: 'marorakotobe@gmail.com', mdp: 'maro' };
  token='';
  constructor(
    private loginService: LoginService, 
    private localStorageService: LocalStorageService,
    private router: Router
    ) {}
    ngOnInit(): void {
    }
    loginManager(): void {
      if (this.login.email && this.login.mdp) {
        this.loginService.loginManager(this.login).subscribe((data) => {
          // Affecter la valeur de token à this.token
          if(data.message="bienvenue"){
            this.token = data.token;
            this.localStorageService.setItem('token', this.token);
            this.router.navigate(['/accueil-admins']);
            console.log(this.token);  // Affiche le token dans la console
          }
          else console.log(data.message);
        }, (error) => {
          // Gérer les erreurs, si nécessaire
          console.error('Erreur de connexion', error);
        });
      } else {
        console.error('Veuillez saisir un email et un mot de passe');
      }
    }
    
}
// (data => this.token =data)