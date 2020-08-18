import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/services.index';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;

  constructor( public sidebar: SidebarService,
               private usuarioService: UsuarioService ) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioService.logout();
  }

}
