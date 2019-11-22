import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent }    from './list-pokemon.component';
import { DetailPokemonComponent }  from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { AuthGuard } from '../auth-guard.service';
​
const pokemonsRoutes: Routes = [
	{
		path: 'pokemon', // Comme un préfixe en Symfo
		canActivate: [AuthGuard],
		children: [ // Routes enfants, donc préfixées par 'pokemon'
			{ path: 'all', component: ListPokemonComponent },
			{ path: 'edit/:id', component: EditPokemonComponent },
			{ path: ':id', component: DetailPokemonComponent }			
		]
	}


];
​
@NgModule({
	imports: [
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PokemonRoutingModule { }