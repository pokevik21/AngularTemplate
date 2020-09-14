import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
declare function init_plugin();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './login.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['Victor', Validators.required],
    email: ['test2@gmail.com', [Validators.required, Validators.email ]],
    password: ['12345', Validators.required],
    password2: ['12345', Validators.required],
    terminos: [ true, Validators.required],

  }, {
    validators: this.passwordsIguales( 'password', 'password2' )
  }
  );

  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private router: Router ) {
    init_plugin();
   }

  ngOnInit(): void {
  }

  crearUsuario(){
    this.formSubmitted = true;
    // console.log(this.registerForm.value);

    if (this.registerForm.invalid) { return; }

    // Realizar el posteo
    this.usuarioService
      .crearUsuario(this.registerForm.value)
      .subscribe( (resp) => {
         // Mover al dashboard
         this.router.navigateByUrl('/');
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error en registro...',
          text: err.error.msg
        });
      } );

  }

  campoNoValido( campo: string ){
    return (this.registerForm.get(campo).invalid && this.formSubmitted);
  }

  contrasenasNoValidas(){
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    return (pass1 !== pass2) && this.formSubmitted;

  }

  passwordsIguales( pass1: string, pass2: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({ noEsIgual: true });
      }

    };

  }

  aceptaTerminos() {
    return !this.registerForm.get( 'terminos' ).value && this.formSubmitted;
  }


}
