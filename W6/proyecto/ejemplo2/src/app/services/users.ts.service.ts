import { Injectable } from '@angular/core';
import { users } from '../data/users.data';

@Injectable({
  providedIn: 'root'
})
export class UsersTsService {

  constructor() { }
  getUsers(){
    return users;
  }
}
