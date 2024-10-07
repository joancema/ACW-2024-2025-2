import { Component } from '@angular/core';
import { ICiudadano } from '../../interfaces/ICiudadano';
import { FormsModule } from '@angular/forms';
import { CiudadanosService } from '../../services/ciudadanos.service';

@Component({
  selector: 'app-ciudadano',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './ciudadano.component.html',
  styleUrl: './ciudadano.component.css'
})
export class CiudadanoComponent {

  //  title: string = 'Ciudadano como titulo';

   ciudadano:ICiudadano = {
    identificacion: '123456',
    nombre: 'Juan',
    edad: 25,
    apellidos: 'Perez',
    direccion: 'Calle 123',
    telefono: '1234567',
   }
   ciudadanos: ICiudadano[] = [];

  constructor(private servicio: CiudadanosService) {
    this.ciudadanos = servicio.getCiudadanos();
    // console.log(this.ciudadanos);
  }

  ngOnInit() {
  }
  guardar(){
    console.log(this.ciudadano);
  }
  nuevo(){
    this.ciudadano = {
      identificacion: '',
      nombre: '',
      edad: 0,
      apellidos: '',
      direccion: '',
      telefono: '',
    }
  }
  editar( ciudadano:ICiudadano ){
      this.ciudadano = ciudadano;
  }
  eliminar(ciudadano:ICiudadano){
    this.servicio.deleteCiudadano(ciudadano.identificacion);
    // this.ciudadanos = this.servicio.getC
    console.log( this.servicio.getCiudadanos())



  }



}
