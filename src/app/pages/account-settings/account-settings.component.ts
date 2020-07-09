import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( private settings: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor( theme: string, link: any ){

    this.aplicarCheck( link );
    this.settings.aplicarTema( theme );

  }

  aplicarCheck( link: any ) {

    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
        ref.classList.remove('working');
    }

    link.classList.add('working');


  }

  colocarCheck() {

    const selectores: any = document.getElementsByClassName('selector');

    const tema = this.settings.ajustes.tema;

    for (const ref of selectores) {
      if ( ref.getAttribute('data-theme') === tema ){
        ref.classList.add('working');
        break;
      }
    }
  }

}
