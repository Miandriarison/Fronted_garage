import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // Méthode pour stocker une donnée dans le localStorage
  setItem(key: string, value: any): void {
    if (value && typeof value === 'object') {
      // Si la valeur est un objet, la convertir en chaîne JSON
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      // Si ce n'est pas un objet, la stocker telle quelle
      localStorage.setItem(key, value);
    }
  }

  // Méthode pour récupérer une donnée depuis le localStorage
  getItem(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        // Si la valeur est un objet sérialisé, la parser
        return JSON.parse(value);
      } catch (e) {
        // Si ce n'est pas un objet JSON, retourner la valeur brute
        return value;
      }
    }
    return null;
  }

  // Méthode pour supprimer une donnée du localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Méthode pour vider le localStorage
  clear(): void {
    localStorage.clear();
  }
}
