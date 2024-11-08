import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFlag } from '../interfaces/IFlag';
import { Observable } from 'rxjs';
import { ICharacter } from '../interfaces/ICharacters';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  private url = 'https://restcountries.com/v3.1/all';
  private urlDragonBall= 'https://dragonball-api.com/api/characters'

  constructor(
    private http: HttpClient
  ) { }

  getFlags(): Observable<IFlag[]> {
    return this.http.get<IFlag[]>(this.url);
  }
  getCharacters(): Observable<ICharacter> {
    return this.http.get<ICharacter>(this.urlDragonBall);
  }




}
