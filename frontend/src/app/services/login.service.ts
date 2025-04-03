import { environment } from '../../environments/environment'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiUrl}/manager/login`; 
  constructor(private http: HttpClient){ }
  loginManager(loginManager1: any): Observable<any> {
    return this.http.post(this.apiUrl, loginManager1);
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
