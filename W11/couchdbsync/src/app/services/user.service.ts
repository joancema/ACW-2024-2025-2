import { Injectable } from '@angular/core';

import PouchDB from 'pouchdb';
import find from 'pouchdb-find';


PouchDB.plugin(find);

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _db:any;

  constructor() {
    this._db = new PouchDB('customers');
  }
  addDocument(doc:any){
    return this._db.put(doc);
  }
  getDocument(id:string){
    return this._db.get(id);
  }
  getAllDocuments(){
    return this._db.allDocs({include_docs:true});
  }
  updateDocument(doc:any){
    return this._db.put(doc);
  }
  deleteDocument(doc:any){
    return this._db.remove(doc);
  }

  syncWithCouchDB(remoteDbURL:string){
    const remoteDb = new PouchDB(remoteDbURL);
    this._db.sync(remoteDb, {
      live: true,
      retry: true
    }).on('change', (change:any) => {
      console.log('Change detected');
    }).on('paused', (info:any) => {
      console.log('Replication paused');
    }).on('active', (info:any) => {
      console.log('Replication resumed');
    }).on('error', (err:any) => {
      console.log('Sync error');
    });
  }




}
