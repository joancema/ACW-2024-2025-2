import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getCharacter } from '../actions/getCharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterId = signal<string| null>(null);


  charactersQuery = injectQuery(()=>({
    queryKey: ['characters', this.characterId]  ,
    queryFn: () => getCharacter( this.characterId()!),
    enabled: !!this.characterId()
 }))

}
