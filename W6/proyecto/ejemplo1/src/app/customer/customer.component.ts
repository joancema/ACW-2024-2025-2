import { Component } from '@angular/core';
import { CustomerService, ICustomer } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  arreglo: ICustomer[] = [];

  constructor( servicio: CustomerService ) {
    this.arreglo = servicio.getCustomers();
    console.log(this.arreglo);
  }



}
