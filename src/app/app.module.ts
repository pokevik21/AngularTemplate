import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { AppRoutingModule } from './app-routing.module';

// Pages
import { PagesModele } from './pages/pages.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModele,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
