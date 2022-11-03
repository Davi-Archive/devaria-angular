import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevstarsComponent } from './devstars/devstars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessoresComponent,
    FaleConoscoComponent,
    DevstarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
