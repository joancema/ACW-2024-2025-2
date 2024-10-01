import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/IUser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  title:string = 'User Componentx ';
  users:IUser[]=[];
  user:IUser={
    name:'',
    email:'',
    password:'',
    age:0
  };
  name= new FormControl('joancema');
  email= new FormControl('joancemac@gmail.com');


  constructor(private serviceUser:UsersService ) { }
  ngOnInit(): void {
    this.users=this.serviceUser.getUsers();
  }
  edit(user:IUser){
    this.user=user;

  }
  delete(user:IUser){
    this.serviceUser.deleteUser(user);

  }
  save(){
    let userAuxiliar:IUser={
      name:this.name.value!,
      email:this.email.value!,
      password:'',
      age:0
    };
    this.serviceUser.addUser(userAuxiliar);
    this.name.setValue('');
    this.email.setValue('');

  }


}
