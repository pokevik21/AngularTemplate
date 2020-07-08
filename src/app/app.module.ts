import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { AppRoutingModule } from './app-routing.module';

// Pages
import { PagesModele } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule } from '@angular/forms';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';

import { ChartsModule } from 'ng2-charts';
import { CompentsModule } from './components/compents.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModele,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
