import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ListarCitasComponent } from './components/citas/listar-citas/listar-citas.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NuevaCitaComponent } from './components/citas/nueva-cita/nueva-cita.component';
import { NuevaCitaPageComponent } from './pages/nueva-cita-page/nueva-cita-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListarCitasComponent,
    HomePageComponent,
    NuevaCitaComponent,
    NuevaCitaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
