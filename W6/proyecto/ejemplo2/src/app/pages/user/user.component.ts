import { Component } from '@angular/core';
import { UsersTsService } from '../../services/users.ts.service';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users:IUser[]=[]

  constructor(private userService: UsersTsService  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }




}
