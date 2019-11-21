import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, tap } from "rxjs/operators";



@Injectable()
export class AuthService {
    isLoggedIn: boolean = false; // Par défaut, l'utilisateur n'est pas connecté
    redirectUrl: string; // Où rediriger l'utilisateur après connection

    //Méthode de connexion
    login(name: string, password: string) : Observable<boolean> {
        // Appel au service d'authentification
        let isLoggedIn = (name === 'admin' && password === 'admin');

        return of(true).pipe(
            delay(1000),
            tap(() => this.isLoggedIn = isLoggedIn)
        )
    }

    // Méthode de déconnexion
    logout(): void {
        this.isLoggedIn = false;
    }
}