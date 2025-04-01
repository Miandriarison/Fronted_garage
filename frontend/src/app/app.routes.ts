import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { SportListComponent } from './components/sport-list/sport-list.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },  // Route pour article-list 
    { path: '', redirectTo: 'articles', pathMatch: 'full' }, // Redirection  par défaut 


    { path: 'logins', component: LoginComponent },  // Route pour article-list 
    { path: 'logins', redirectTo: 'logins', pathMatch: 'full' }, // Redirection  par défaut 
];
