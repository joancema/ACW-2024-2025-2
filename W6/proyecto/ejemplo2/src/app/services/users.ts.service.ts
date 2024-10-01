import { Injectable } from '@angular/core';
import { users } from '../data/users.data';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersTsService {
  addUser(user: IUser) {
    users.push(user);
  }
  deleteUser(user: IUser) {
    users.splice(users.indexOf(user), 1);
  }

  constructor() { }
  getUsers(){
    return users;
  }
}
