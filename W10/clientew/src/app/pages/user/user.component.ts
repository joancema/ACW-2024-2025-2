import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private couchdbService: UserService) {}
  ngOnInit() {
    const doc = {
      _id: '002',
      title: 'Otro ejemplo',
      content: 'This is a sample document'
    };
    this.couchdbService.addDocument(doc).then((response:any) => {
      console.log('Document added:', response);
    }).catch((error:any)  => {
      console.error('Error adding document:', error);
    });

    // Retrieving a document
    this.couchdbService.getDocument('002').then((response:any) => {
      console.log('Document fetched:', response);
    }).catch((error:any) => {
      console.error('Error fetching document:', error);
    });
  }
  sincronizar() {
    this.couchdbService.syncWithCouchDB('http://admin:adminpassword@localhost:5984/users');
    // http://username:password@localhost:5984/my_database


  }

}
