import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColor } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule,
    ],
    declarations: [ // pour les composants
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColor, 
        PokemonFormComponent,
        EditPokemonComponent
    ],
    providers: [ // pour les services
        PokemonService, 
        AuthService,
        AuthGuard
    ]
})

export class PokemonModule {}