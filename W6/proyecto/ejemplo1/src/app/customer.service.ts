import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  arreglo:ICustomer[] = [
    {id: 1, nombre: 'Juan', apellido: 'Perez', edad: 25},
    {id: 2, nombre: 'Maria', apellido: 'Gomez', edad: 30},
    {id: 3, nombre: 'Pedro', apellido: 'Rodriguez', edad: 35},
    {id: 4, nombre: 'Luis', apellido: 'Lopez', edad: 40},
    {id: 5, nombre: 'Ana', apellido: 'Martinez', edad: 45}
  ]

  constructor() { }

  getCustomers(){
    return this.arreglo;
  }

}
export interface ICustomer {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
}
