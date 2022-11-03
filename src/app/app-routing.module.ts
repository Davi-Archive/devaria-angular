import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevstarsComponent } from './devstars/devstars.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  { path: 'devaria-angular/', component: HomeComponent },
  { path: 'devaria-angular/professores', component: ProfessoresComponent },
  { path: 'devaria-angular/faleConosco', component: FaleConoscoComponent },
  { path: 'devaria-angular/devstars', component: DevstarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
