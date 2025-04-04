import { environment } from '../../environments/environment'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PieceAdminService {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient){ }
  getVoitures(marque_id : String): Observable<any> {
    return this.http.get(this.apiUrl+'/voiture/Recuperation/'+marque_id);
  }
  getMarques(): Observable<any> {
    return this.http.get(this.apiUrl+'/marque/Recuperation');
  }
  getPieces(): Observable<any> {
    return this.http.get(this.apiUrl+"/piece/Recuperation");
  }
  addPiece(piece: any): Observable<any> {
    return this.http.post(this.apiUrl+"/piece/Creation", piece);
  }
  // updateArticle(id: string, article: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, article);
  // }
  // deleteArticle(id: string): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
}


