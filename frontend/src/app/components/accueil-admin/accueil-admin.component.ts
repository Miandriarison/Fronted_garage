import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-accueil-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './accueil-admin.component.html',
  styleUrl: './accueil-admin.component.css'
})
export class AccueilAdminComponent {
  constructor() {}
//   ngOnInit(): void {
//   this.loadMecaniciens();
//   }
//   loadMecaniciens(): void {
//   this.accueilAdminService.getMecanicien().subscribe(data => this.mecanicien =
//  data);
//   }
//   deleteMecanicien(id: string): void {
//   this.accueilAdminService.deleteMecanicien(id).subscribe(() =>
//  this.loadMecaniciens());
//   }
  // addArticle(): void {
  //   if (this.newArticle.title && this.newArticle.content) {
  //   this.articleService.addArticle(this.newArticle).subscribe(() => {
  //   this.loadArticles(); // Recharge la listeaprès ajout
  //   this.newArticle = { title: '', content: '' }; // Réinitialise leformulaire
  //   });
  //   }
  //   }
}
