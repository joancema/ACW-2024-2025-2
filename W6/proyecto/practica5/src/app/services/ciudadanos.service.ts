import { Injectable } from '@angular/core';
import { ciudadanos } from '../data/ciudadanos.data';
import { ICiudadano } from '../interfaces/ICiudadano';

@Injectable({
  providedIn: 'root'
})
export class CiudadanosService {

  constructor() { }
//GET   --- READ
  getCiudadanos():ICiudadano[]{
    return ciudadanos;
  }
  getCiudadano(identificacion:string) : ICiudadano|undefined{
    return ciudadanos.find(ciudadano => ciudadano.identificacion === identificacion);
  }
  //POST   --- CREATE
  addCiudadano(ciudadano:ICiudadano){
    ciudadanos.push(ciudadano);
  }
  //PUT   --- UPDATE
  updateCiudadano(ciudadano:ICiudadano){
    const index = ciudadanos.findIndex(c => c.identificacion === ciudadano.identificacion);
    ciudadanos[index] = ciudadano;
  }
  //DELETE   --- DELETE
  deleteCiudadano(identificacion:string){
    const index = ciudadanos.findIndex(c => c.identificacion === identificacion);
    ciudadanos.splice(index, 1);
  }


}
