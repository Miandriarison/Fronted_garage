import { environment } from '../../environments/environment'; 
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MechanicService {
  private apiUrl = `${environment.apiUrl}`; 
  constructor(private http: HttpClient) { }
  getMecanicien(): Observable<any> {
    return this.http.get(this.apiUrl+"/mecanicien/Recuperation");
  }
  addMecanicien(mecanicien: any,token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ajouter le token dans les en-têtes
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl+"/mecanicien/Creation", mecanicien, {headers});
  }
  deleteMecanicien(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/mecanicien/${id}`);
  }  
}
