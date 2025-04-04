import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarAdminService } from '../../services/car-admin.service';
@Component({
  selector: 'app-car-admin',
  imports: [FormsModule,CommonModule],
  templateUrl: './car-admin.component.html',
  styleUrl: './car-admin.component.css'
})
export class CarAdminComponent {
  cars: any[] = [];
  marques: any[] = [];
  newCar = { model: '', marque_id: '' };
  constructor(private carAdminService: CarAdminService) {}
  ngOnInit(): void {
  this.loadCars();
  this.loadMarques();
  }
  loadCars(): void {
  this.carAdminService.getVoitures().subscribe(data => this.cars =data);
  }
  loadMarques(): void {
  this.carAdminService.getMarques().subscribe(data => this.marques =data);
  }
  addCar(): void {
    console.log(this.newCar)
    if (this.newCar.model && this.newCar.marque_id) {
    this.carAdminService.addVoiture(this.newCar).subscribe(() => {
    this.loadCars(); // Recharge la listeaprès ajout
    this.newCar = { model: '', marque_id: '' }; // Réinitialise leformulaire
    });
    }
  }
}
