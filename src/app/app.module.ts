import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { HttpClientModule } from '@angular/common/http'; // permet de faire des requêtes sur la BDD
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // Crée un BDD virtuelle
import { InMemoryDataService } from './pokemon/in-memory-data.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ // Liste les modules utilisés dans l'appli
        BrowserModule,
        HttpClientModule,
        FormsModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        PokemonModule,
        LoginRoutingModule,
        AppRoutingModule
    ],
    declarations: [ // Liste tous les composants et directives
        AppComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    bootstrap: [ // d'où est lancée l'appli, NE PAS TOUCHER !
        AppComponent
    ]
})
export class AppModule { }




