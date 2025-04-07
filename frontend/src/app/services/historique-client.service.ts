import { environment } from '../../environments/environment'; 
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueClientService {
  private apiUrl = `${environment.apiUrl}`; 
  constructor(private http: HttpClient) { }
  getRdv(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ajouter le token dans les en-têtes
      'Content-Type': 'application/json'
    });
    return this.http.get(this.apiUrl+"/reservation/RecuperationByid_Client", {headers});
  }
}



