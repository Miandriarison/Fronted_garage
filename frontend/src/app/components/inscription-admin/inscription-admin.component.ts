import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InscriptionAdminService } from '../../services/inscription-admin.service';


@Component({
  selector: 'app-inscription-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './inscription-admin.component.html',
  styleUrl: './inscription-admin.component.css'
})
export class InscriptionAdminComponent {
  newManager = { nom: '', prenom: '', email:'',datedenaissance:'', mdp:'', mdp1:'' };
  constructor(private inscriptionAdminService: InscriptionAdminService,) {}
  addManager(): void {
    if (this.newManager.nom && this.newManager.prenom && this.newManager.email && this.newManager.mdp && this.newManager.mdp1 && this.newManager.datedenaissance) {
      console.log(this.newManager);
      this.inscriptionAdminService.addManager(this.newManager).subscribe(() => {
      this.newManager = { nom: '', prenom: '', email:'',datedenaissance:'', mdp:'', mdp1:'' }; // Réinitialise leformulaire
    });
    }
    }
}
