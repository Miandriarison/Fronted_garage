import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PieceAdminService } from '../../services/piece-admin.service';

@Component({
  selector: 'app-piece-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './piece-admin.component.html',
  styleUrl: './piece-admin.component.css'
})
export class PieceAdminComponent {
  newPiece = { marque_id: '', voiture_id: '', prix:'', nom:'' };
  pieces: any[] = [];
  marques: any[] = [];
  voitures: any[] = [];
  constructor(private pieceAdminService: PieceAdminService,) {}
  ngOnInit(): void {
  this.loadPieces();
  this.loadMarques();
  }
  loadPieces(): void {
  this.pieceAdminService.getPieces().subscribe(data => this.pieces =
 data);
  }
  loadMarques(): void {
    this.pieceAdminService.getMarques().subscribe((data) => {
      this.marques =data;
      console.log(this.marques);
    });
  }
  onMarqueChange() {
    // Filtrer les modèles selon la marque sélectionnée
    if (this.newPiece.marque_id) {
      this.pieceAdminService.getVoitures(this.newPiece.marque_id).subscribe((data) => {
        this.voitures =data;
      });
    } else {
      this.newPiece.marque_id ='' ;
    }
  }
    addPiece(): void {
      if (this.newPiece.marque_id && this.newPiece.voiture_id && this.newPiece.prix && this.newPiece.nom) {
        this.pieceAdminService.addPiece(this.newPiece).subscribe(() => {
        this.loadPieces(); // Recharge la listeaprès ajout
        console.log(this.newPiece);
        this.newPiece = { marque_id: '', voiture_id: '', prix:'', nom:'' }; // Réinitialise leformulaire
      });
      }
      }
}




