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
    code: new FormControl(''),
    name: new FormControl(''),
  });

  listado: IUser[] = [];

  constructor( private cliente: MostrarService  ) {
    console.log('servicio creado')


  }

  ngOnInit(): void {

  }
  guardar() {
    this.cliente.addDocument(this.forma.value).subscribe((data) => {
      console.log(data);
    })
  }
  consultar(){
    this.listado=[];
    this.cliente.getAllDocuments().subscribe((data) => {
      data.rows.forEach((element: any) => {
        this.listado.push({
          code: element.doc.code,
          name: element.doc.name,
          id: element.id,
          rev: element.doc._rev
        })
      })
    })
  }
  eliminar(elemento:IUser){
    this.cliente.deleteDocument( elemento.id, elemento.rev ).subscribe((data) => {
      console.log(data);
    })
  }
  editar(elemento:IUser){
    this.forma.setValue(elemento);
    // this.cliente.updateDocument(this.forma.value).subscribe((data) => {
      // console.log(data);
    // })
  }

}
interface IUser{
  code: string;
  name: string;
  id: string;
  rev: string;
}
