import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

   // tslint:disable-next-line:no-input-rename
   @Input( 'nombre' ) leyenda: string = 'Leyenda';
   @Input() progreso: number = 0;

   @Output() cambioValor = new EventEmitter<any>();

   @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {
    // console.log( 'leyenda', this.leyenda );
    // console.log( 'progreso', this.progreso );
  }

  ngOnInit(): void{ }

  onChange( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progreso = 100;
    }else if ( newValue <= 0 ) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }



    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();

  }

  cambiarValor( num: number ){

    num += this.progreso;

    if ( (num > 100) || (num < 0) ) {
      return;
    }

    this.progreso = num;
    this.cambioValor.emit( this.progreso );
  }

}
