import { environment } from '../../environments/environment'; 
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvClientService {
  private apiUrl = `${environment.apiUrl}`; 
  constructor(private http: HttpClient) { }
  addRdv(rdv: any,token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ajouter le token dans les en-têtes
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl+"/reservation/Creation", rdv, {headers});
  }
}
