import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HistoriqueClientService } from '../../services/historique-client.service';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-historique-client',
  imports: [CommonModule, FormsModule],
  templateUrl: './historique-client.component.html',
  styleUrl: './historique-client.component.css'
})
export class HistoriqueClientComponent {
  listes_rdv: any[] = [];
  constructor(
    private historiqueClientService: HistoriqueClientService,
    private localStorageService: LocalStorageService
    ) {}
    ngOnInit(): void {
      this.loadListes_rdv();
    }
    loadListes_rdv(): void {
      this.historiqueClientService.getRdv(this.localStorageService.getItem('token')).subscribe((data) => {
        this.listes_rdv =data;
        console.log(this.listes_rdv); 
      });
    }

}





  





