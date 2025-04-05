import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClientLoginService } from '../../services/client-login.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-client-login',
  imports:  [CommonModule, FormsModule],
  templateUrl: './client-login.component.html',
  styleUrl: './client-login.component.css'
})
export class ClientLoginComponent {
  login = { email: 'ramasiariniainatoavina@gmail.com', mdp: 'Toavina' };
  token='';
  constructor(
    private clientLoginService: ClientLoginService, 
    private localStorageService: LocalStorageService,
    private router: Router
    ) {}
    ngOnInit(): void {
    }
    loginClient(): void {
      if (this.login.email && this.login.mdp) {
        this.clientLoginService.loginManager(this.login).subscribe((data) => {
          // Affecter la valeur de token à this.token
          if(data.message="bienvenue"){
            this.token = data.token;
            this.localStorageService.setItem('token', this.token);
            this.router.navigate(['/accueil-clients']);
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
