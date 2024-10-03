import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MostrarService } from '../../services/mostrar.service';

@Component({
  selector: 'app-mostrar',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {

  forma: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl('')
  });

  constructor( private cliente: MostrarService  ) {
    console.log('servicio creado')


  }

  ngOnInit(): void {

  }
  guardar() {
    console.log(this.forma.value);
  }
  consultar(){
    console.log('consultar');
    this.cliente.getAllDocuments().subscribe((data) => {
      console.log(data);
    })
  }

}
