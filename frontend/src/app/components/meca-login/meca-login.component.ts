import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MecaLoginService } from '../../services/meca-login.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-meca-login',
  imports:  [CommonModule, FormsModule],
  templateUrl: './meca-login.component.html',
  styleUrl: './meca-login.component.css'
})
export class MecaLoginComponent {
  login = { email: 'mec1@gmail.com', mdp: 'Mec' };
  token='';
  constructor(
    private loginService: MecaLoginService, 
    private localStorageService: LocalStorageService,
    private router: Router
    ) {}
    ngOnInit(): void {
    }
    loginMecanicien(): void {
      if (this.login.email && this.login.mdp) {
        this.loginService.loginManager(this.login).subscribe((data) => {
          // Affecter la valeur de token à this.token
          if(data.message="bienvenue"){
            this.token = data.token;
            this.localStorageService.setItem('token', this.token);
            this.router.navigate(['/1RDV-meca']);
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
