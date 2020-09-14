import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedarService } from '../../services/busquedar.service';
import { Usuario } from '../../models/usuario.model';
import { Medico } from '../../models/medico.model';
import { Hospital } from '../../models/hospital.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario[] = [];
  medicos: Medico[] = [];
  hospitales: Hospital[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private busquedarService: BusquedarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ termino }) => {
      this.busquedaGlobal(termino);
    });
  }

  busquedaGlobal( termino: string ){
    this.busquedarService.busquedaGobal(termino)
        .subscribe( (resp: any) => {
          this.usuarios = resp.usuarios;
          this.medicos = resp.medicos;
          this.hospitales = resp.hospitales;
        });
  }


}
