import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PieceAdminService } from '../../services/piece-admin.service';
import { RdvClientService } from '../../services/rdv-client.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-rdv-client',
  imports: [CommonModule, FormsModule],
  templateUrl: './rdv-client.component.html',
  styleUrl: './rdv-client.component.css'
})
// client_id:  { type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true },
//     voiture_id: { type: mongoose.Schema.Types.ObjectId, ref: 'voiture', required: true },
//     adresse:{ type: String, required: true },
//     description:{ type: String, required: true },
//     tel: { type: String, required: true },
//     etat:{type:Number ,required: true, validate:{
export class RdvClientComponent {
  newRdv = {marque_id:'', client_id: '', voiture_id: '', adresse:'', description:'', tel:'', etat:0 };
  marques: any[] = [];
  voitures: any[] = [];
  constructor(
    private pieceAdminService: PieceAdminService,
    private rdvClientService: RdvClientService,
    private localStorageService: LocalStorageService
    ) {}
  ngOnInit(): void {
    this.loadMarques();
    }
    loadMarques(): void {
      this.pieceAdminService.getMarques().subscribe((data) => {
        this.marques =data;
        console.log(this.marques);
      });
    }
    onMarqueChange() {
      // Filtrer les modèles selon la marque sélectionnée
      if (this.newRdv.marque_id) {
        this.pieceAdminService.getVoitures(this.newRdv.marque_id).subscribe((data) => {
          this.voitures =data;
        });
      } else {
        this.newRdv.marque_id ='' ;
      }
    }
      addRdv(): void {
        if (this.newRdv.tel && this.newRdv.voiture_id && this.newRdv.adresse && this.newRdv.description) {
          this.rdvClientService.addRdv(this.newRdv,this.localStorageService.getItem("token")).subscribe(() => {
          this.newRdv = {marque_id:'', client_id: '', voiture_id: '', adresse:'', description:'', tel:'', etat:0 }; // Réinitialise leformulaire
        });
        }
        }
  }



  




