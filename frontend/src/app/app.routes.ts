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
import { OnerdvMecaComponent } from './components/onerdv-meca/onerdv-meca.component';
import { Detail1rdvComponent } from './components/detail1rdv/detail1rdv.component';
import { TwordvMecaComponent } from './components/twordv-meca/twordv-meca.component';
import { DevisComponent } from './components/devis/devis.component';
import { Details2rdvComponent } from './components/details2rdv/details2rdv.component';
import { ChoixProfilComponent } from './components/choix-profil/choix-profil.component';
import { MecaLoginComponent } from './components/meca-login/meca-login.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { ClientInscriptionComponent } from './components/client-inscription/client-inscription.component';

export const routes: Routes = [

    // profil
    { path: 'choix', component: ChoixProfilComponent },  // Route pour article-list 
    { path: '', redirectTo: 'choix', pathMatch: 'full' }, // Redirection  par défaut

    { path: 'loginmeca', component: MecaLoginComponent },  // Route pour article-list 
    { path: 'loginmeca', redirectTo: 'loginmeca', pathMatch: 'full' }, // Redirection  par

    { path: 'loginclient', component: ClientLoginComponent },  // login client
    { path: 'loginclient', redirectTo: 'loginclient', pathMatch: 'full' }, // Redirection  par
    
    { path: 'inscritpionclient', component: ClientInscriptionComponent },  // login client
    { path: 'inscritpionclient', redirectTo: 'inscritpionclient', pathMatch: 'full' }, // Redirection  par 

    { path: 'logins', component: LoginComponent },  // Route pour article-list 
    { path: 'logins', redirectTo: 'logins', pathMatch: 'full' }, // Redirection  par défaut  

    { path: 'inscription-admins', component: InscriptionAdminComponent },  // Route pour article-list 
    { path: 'inscription-admins', redirectTo: 'inscription-admins', pathMatch: 'full' }, // Redirection  par défaut   

    // manager 
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

    // lien client rehetra
    { path: 'accueil-clients', component: AccueilClientComponent },  // Route pour article-list 
    { path: 'accueil-clients', redirectTo: 'accueil-clients', pathMatch: 'full' }, // Redirection  par défaut

    { path: 'appointments', component: RdvClientComponent },  // Route pour article-list 
    { path: 'appointments', redirectTo: 'appointments', pathMatch: 'full' }, // Redirection  par défaut

    { path: 'Historys', component: HistoriqueClientComponent },  // Route pour article-list 
    { path: 'Historys', redirectTo: 'Historys', pathMatch: 'full' }, // Redirection  par défaut

    { path: 'Details-historys-clients', component: DetailsHistoriqueClientComponent },  // Route pour article-list 
    { path: 'Details-historys-clients', redirectTo: 'Details-historys-clients', pathMatch: 'full' }, // Redirection  par défaut

// lien meca rehetra    
    { path: '1RDV-meca', component: OnerdvMecaComponent },  // Route pour article-list 
    { path: '1RDV-meca', redirectTo: '1RDV-meca', pathMatch: 'full' }, // Redirection  par défaut

    
    { path: 'details1RDV', component: Detail1rdvComponent },  // Route pour article-list 
    { path: 'details1RDV', redirectTo: 'details1RDV', pathMatch: 'full' }, // Redirection  par défaut

    
    { path: '2rdv', component: TwordvMecaComponent },  // Route pour article-list 
    { path: '2rdv', redirectTo: '2rdv', pathMatch: 'full' }, // Redirection  par défaut

    
    { path: 'devis', component: DevisComponent },  // Route pour article-list 
    { path: 'devis', redirectTo: 'devis', pathMatch: 'full' }, // Redirection  par défaut

    
    { path: 'details2RDV', component: Details2rdvComponent },  // Route pour article-list 
    { path: 'details2RDV', redirectTo: 'details1RDV', pathMatch: 'full' }, // Redirection  par défaut
];
