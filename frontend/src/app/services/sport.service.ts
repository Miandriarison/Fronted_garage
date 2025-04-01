import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment';  // Import de l’environnement

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private apiUrl = `${environment.apiUrl}/sports`;  // Utilisation de la variable d’environnement
    constructor(private http: HttpClient) {} 
    getSports(): Observable<any> { 
      return this.http.get(this.apiUrl); 
    } 
    addSport(sport: any): Observable<any> { 
      return this.http.post(this.apiUrl, sport); 
    } 
    updateSport(id: string, sport: any): Observable<any> { 
      return this.http.put(`${this.apiUrl}/${id}`, sport); 
    } 
    deleteSport(id: string): Observable<any> { 
      return this.http.delete(`${this.apiUrl}/${id}`); 
    }
}
