import { Injectable } from '@angular/core';
import { users } from '../data/users.data';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
    return users;
  }
  getUser(index:number){
    return users[index];
  }
  addUser(user:IUser){
    users.push(user);
  }
  deleteUser(user:IUser){
    users.splice(users.indexOf(user),1);
  }
  updateUser(user:IUser){
    users[users.indexOf(user)]=user;
  }

}
