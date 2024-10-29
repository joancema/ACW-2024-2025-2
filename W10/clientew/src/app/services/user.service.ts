import { Injectable } from '@angular/core';

import PouchDB  from 'pouchdb';

import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);
// const db = new PouchDB('my_database');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private db: any;

  constructor() {
    this.db = new PouchDB('my_database');  // Creates a local database
    // Alternatively, you can connect directly to CouchDB by setting the remote URL
    // this.db = new PouchDB('http://localhost:5984/my_database');
  }
  addDocument(doc: any) {
    return this.db.put(doc);  // Adds a document to the database
  }

  getDocument(id: string) {
    return this.db.get(id);   // Fetches a document by ID
  }
  getAllDocument(){
    return this.db.allDocs({include_docs: true});
  }

  updateDocument(doc: any) {
    return this.db.put(doc);  // Updates a document
  }

  deleteDocument(doc: any) {
    return this.db.remove(doc);  // Deletes a document
  }

  syncWithCouchDB(remoteDbUrl: string) {
    const remoteDb = new PouchDB(remoteDbUrl);
    return this.db.sync(remoteDb, {
      live: true,   // Continuous sync
      retry: true   // Automatically retry on failure
    });
  }
}
