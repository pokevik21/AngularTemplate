import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { async } from '@angular/core/testing';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor( private usuarioService: UsuarioService ) {

    this.usuario = usuarioService.usuario;

  }

  ngOnInit(): void {
  }

  logout() {
    this.usuarioService.logout();
  }


}
