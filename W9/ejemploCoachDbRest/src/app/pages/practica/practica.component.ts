import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {
  forma: FormGroup= new FormGroup({
    code: new FormControl('001'),
    name: new FormControl('Prueba'),
  });
  user:IUser= {
    id: "",
    name: "",
    code: "",
    rev: ""
  }
  users:IUser[] = [];
  constructor() { }

}
