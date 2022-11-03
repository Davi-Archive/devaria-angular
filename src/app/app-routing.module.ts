import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevstarsComponent } from './devstars/devstars.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'professores', component: ProfessoresComponent },
  { path: 'faleConosco', component: FaleConoscoComponent },
  { path: 'devstars', component: DevstarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
