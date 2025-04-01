import { Component, OnInit } from '@angular/core'; 
import { SportService } from '../../services/sport.service'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-sport-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
  export class SportListComponent implements OnInit{
  sports: any[] = []; 
  
  constructor(private sportService: SportService) {} 

  ngOnInit(): void { 
  this.loadSports(); 
  }

  loadSports(): void { 
    this.sportService.getSports().subscribe(data => this.sports = 
    data); 
  }

  deleteSport(id: string): void { 
    this.sportService.deleteSport(id).subscribe(() => 
    this.loadSports()); 
  }
  
  newSport = { name: '', category: '' };  // Nouveau modèle pour le formulaire

  addSport(): void { 
    if (this.newSport.name && this.newSport.category) { 
      this.sportService.addSport(this.newSport).subscribe(() => { 
      this.loadSports();                     
      // Recharge la liste après ajout 
      this.newSport = { name: '', category: '' };  // Réinitialise le formulaire 
      }); 
    } 
  }
}
