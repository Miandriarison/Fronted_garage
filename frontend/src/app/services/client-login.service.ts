import { environment } from '../../environments/environment'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientLoginService {

  private apiUrl = `${environment.apiUrl}/client/login`; 
  constructor(private http: HttpClient){ }
  loginManager(loginClient: any): Observable<any> {
    return this.http.post(this.apiUrl, loginClient);
  }
  // getArticles(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }
  // addArticle(article: any): Observable<any> {
  //   return this.http.post(this.apiUrl, article);
  // }
  // updateArticle(id: string, article: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, article);
  // }
  // deleteArticle(id: string): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }  
}

