import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/IUser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ FormsModule  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user:IUser = {
    _id: '',
    title: '',
    content: ''
  };
  users:IUser[] = [];
  constructor(private couchdbService: UserService) {}
  ngOnInit() {
    this.sincronizar();
    this.list()
  }
  list(){
    this.couchdbService.getAllDocument().then((response:any) => {
      this.users = response.rows.map((row:any) => row.doc);
    }).catch((error:any) => {
      console.error('Error fetching all documents:', error);
    });
  }
  save(){
    this.couchdbService.addDocument(this.user).then((response:any) => {
      console.log('Document added:', response);
      this.list();
      this.new()
    }).catch((error:any)  => {
      console.error('Error adding document:', error);
    });
  }
  new(){
    this.user = {
      _id: '',
      title: '',
      content: ''
    };
  }
  getOne(){
    this.couchdbService.getDocument('002').then((response:any) => {
      console.log('Document fetched:', response);
    }).catch((error:any) => {
      console.error('Error fetching document:', error);
    });
  }
  edit(user:IUser){
    this.user = user;
    // this.couchdbService.updateDocument(user).then((response:any) => {
    //   console.log('Document updated:', response);
    // }).catch((error:any) => {
    //   console.error('Error updating document:', error);
    // });

  }
  delete(user:IUser){
    this.couchdbService.deleteDocument(user).then((response:any) => {
      console.log('Document deleted:', response);
    }).catch((error:any) => {
      console.error('Error deleting document:', error);
    });
  }
  sincronizar() {
    this.couchdbService.syncWithCouchDB('http://admin:adminpassword@localhost:5984/users');
    // http://username:password@localhost:5984/my_database


  }

}
