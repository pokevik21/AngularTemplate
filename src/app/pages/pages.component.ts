import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/shared/sidebar.service';

declare function init_plugin();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private sidebarService: SidebarService ) { }

  ngOnInit(): void {
    init_plugin();
    this.sidebarService.cargarMenu();
  }

}
