import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../../interfaces/IUser';
import { PracticaService } from '../../services/practica.service';

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


  constructor(private cliente: PracticaService  ) {


  }


  guardar(){

    this.cliente.addDocument(this.forma.value).subscribe((data)=>{
      console.log(data);
    })

  }
  consultar(){
    this.users=[];
    this.cliente.getAlldocuments().subscribe((data)=>{
      data.rows.forEach((element:any) => {
        this.users.push({
          id: element.doc._id,
          name: element.doc.name,
          code: element.doc.code,
          rev: element.doc._rev
        });
      })
    })
  }
  editar(elemento:IUser){
    this.forma.controls['code'].setValue(elemento.code);
    this.forma.controls['name'].setValue(elemento.name);
    // this.forma.setValue(elemento);
    // console.log(elemento);
  }
  eliminar(elemento:IUser){


    this.cliente.deleteDocument(elemento.id, elemento.rev).subscribe((data)=>{
      console.log(data);
      this.consultar();
    })



  }

}
