import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MechanicService } from '../../services/mechanic.service';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-mechanic',
  imports: [CommonModule, FormsModule],
  templateUrl: './mechanic.component.html',
  styleUrl: './mechanic.component.css'
})
export class MechanicComponent {
  constructor(private mechanicService: MechanicService,private localStorageService: LocalStorageService) {}
  newmecanicien = { nom: '', prenom: '',email: '', datedenaissance: '',mdp: '', mdp1: '',salaire:0 };
  mecaniciens: any[] = [];
  
  ngOnInit(): void {
  this.loadMecaniciens();
  }
  loadMecaniciens(): void {
  this.mechanicService.getMecanicien().subscribe((data) =>{
    this.mecaniciens =data;
  }); 
  }
  deleteMecanicien(id: string): void {
  this.mechanicService.deleteMecanicien(id).subscribe(() =>
 this.loadMecaniciens());
  }
  addMecanicien(): void {
    if ( 
      this.newmecanicien.nom && this.newmecanicien.prenom && this.newmecanicien.email && this.newmecanicien.mdp 
      && this.newmecanicien.mdp1 && this.newmecanicien.datedenaissance&& this.newmecanicien.salaire>0) 
      {

        this.mechanicService.addMecanicien(this.newmecanicien,this.localStorageService.getItem("token")).subscribe((data) => {
          console.log(data);
        this.loadMecaniciens(); // Recharge la listeaprès ajout
        this.newmecanicien = { nom: '', prenom: '',email: '', datedenaissance: '',mdp: '', mdp1: '',salaire:0 }; // Réinitialise leformulaire
    });
    }
    }
}
