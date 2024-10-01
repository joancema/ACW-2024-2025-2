import { Component } from '@angular/core';
import { UsersTsService } from '../../services/users.ts.service';
import { IUser } from '../../interfaces/IUser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users:IUser[]=[]
  user:IUser={  name: '', email: '', age: 0, active: false};

  constructor(private userService: UsersTsService  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  addUser(){
    this.userService.addUser(this.user);
    this.user={  name: '', email: '', age: 0, active: false};
  }
  deleteUser(user:IUser){
    this.userService.deleteUser(user);
  }
  selectUser(user:IUser){
    this.user=user;
  }




}
