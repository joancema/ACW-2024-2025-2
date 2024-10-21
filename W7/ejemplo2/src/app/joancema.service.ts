import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoancemaService {

  private couchDbUrl = 'http://localhost:5984/joancema';

  private getHttpOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:adminpassword'),  // Replace with CouchDB credentials
    });
    return { headers };
  }

  constructor(
    private http: HttpClient
  ) { }
  addDocument(doc: any): Observable<any> {
    return this.http.post(this.couchDbUrl, doc, this.getHttpOptions());
  }

  // Get a document by ID
  getDocument(id: string): Observable<any> {
    return this.http.get(`${this.couchDbUrl}/${id}`, this.getHttpOptions());
  }

  // Update a document
  updateDocument(id: string, doc: any): Observable<any> {
    return this.http.put(`${this.couchDbUrl}/${id}`, doc, this.getHttpOptions());
  }

  // Delete a document
  deleteDocument(id: string, rev: string): Observable<any> {
    return this.http.delete(`${this.couchDbUrl}/${id}?rev=${rev}`, this.getHttpOptions());
  }

  // Get all documents in the database (with _all_docs endpoint)
  getAllDocuments(): Observable<any> {
    return this.http.get(`${this.couchDbUrl}/_all_docs?include_docs=true`, this.getHttpOptions());
  }


}
