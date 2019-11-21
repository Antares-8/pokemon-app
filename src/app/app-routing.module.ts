import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found.component";

// Définition des routes

const appRoutes: Routes = [

    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' }, // Pour rediriger depuis l'url de base du serveur (:3000) vers la route principale
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }