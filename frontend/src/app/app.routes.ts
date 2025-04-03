import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InscriptionAdminComponent } from './components/inscription-admin/inscription-admin.component';
import { AccueilAdminComponent } from './components/accueil-admin/accueil-admin.component';
import { MechanicComponent } from './components/mechanic/mechanic.component';
import { CarAdminComponent } from './components/car-admin/car-admin.component';
import { PieceAdminComponent } from './components/piece-admin/piece-admin.component';
import { CalendarAdminComponent } from './components/calendar-admin/calendar-admin.component';
import { AccueilClientComponent } from './components/accueil-client/accueil-client.component';
import { RdvClientComponent } from './components/rdv-client/rdv-client.component';
import { HistoriqueClientComponent } from './components/historique-client/historique-client.component';
import { DetailsHistoriqueClientComponent } from './components/details-historique-client/details-historique-client.component';

export const routes: Routes = [
    { path: 'logins', component: LoginComponent },  // Route pour article-list 
    { path: '', redirectTo: 'logins', pathMatch: 'full' }, // Redirection  par défaut  

    { path: 'inscription-admins', component: InscriptionAdminComponent },  // Route pour article-list 
    { path: 'inscription-admins', redirectTo: 'inscription-admins', pathMatch: 'full' }, // Redirection  par défaut   

    { path: 'accueil-admins', component: AccueilAdminComponent },  // Route pour article-list 
    { path: 'accueil-admins', redirectTo: 'accueil-admins', pathMatch: 'full' }, // Redirection  par défaut   

    { path: 'mechanics', component: MechanicComponent },  // Route pour article-list 
    { path: 'mechanics', redirectTo: 'mechanics', pathMatch: 'full' }, // Redirection  par défaut   

    { path: 'car-admins', component: CarAdminComponent },  // Route pour article-list 
    { path: 'car-admins', redirectTo: 'car-admins', pathMatch: 'full' }, // Redirection  par défaut   

    { path: 'piece-admins', component: PieceAdminComponent },  // Route pour article-list 
    { path: 'piece-admins', redirectTo: 'piece-admins', pathMatch: 'full' }, // Redirection  par défaut

    { path: 'calendar-admins', component: CalendarAdminComponent },  // Route pour article-list 
    { path: 'calendar-admins', redirectTo: 'calendar-admins', pathMatch: 'full' }, // Redirection  par défaut

    { path: 'accueil-clients', component: AccueilClientComponent },  // Route pour article-list 
    { path: 'accueil-clients', redirectTo: 'accueil-clients', pathMatch: 'full' }, // Redirection  par défaut

    { path: 'appointments', component: RdvClientComponent },  // Route pour article-list 
    { path: 'appointments', redirectTo: 'appointments', pathMatch: 'full' }, // Redirection  par défaut

    { path: 'Historys', component: HistoriqueClientComponent },  // Route pour article-list 
    { path: 'Historys', redirectTo: 'Historys', pathMatch: 'full' }, // Redirection  par défaut

    { path: 'Details-historys-clients', component: DetailsHistoriqueClientComponent },  // Route pour article-list 
    { path: 'Details-historys-clients', redirectTo: 'Details-historys-clients', pathMatch: 'full' }, // Redirection  par défaut
];
