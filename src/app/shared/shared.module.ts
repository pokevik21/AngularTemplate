import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcumsComponent } from './breadcums/breadcums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcumsComponent
  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcumsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
