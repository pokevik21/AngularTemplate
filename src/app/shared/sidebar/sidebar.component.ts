import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/services.index';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor( public sidebar: SidebarService,
               private usuarioService: UsuarioService ) { }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioService.logout();
  }

}
