import { Injectable, signal } from '@angular/core';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { getCharacter } from '../actions/getCharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterId = signal<string | null>(null);
  private queryClient = injectQueryClient();

  charactersQuery = injectQuery(() => ({
    queryKey: ['characters', this.characterId()],
    queryFn: () => getCharacter(this.characterId()!),
    enabled: !!this.characterId(),
  }));
  prefetchCharacter(characterId: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['characters', characterId], // Tipo estricto
      queryFn: () => getCharacter(characterId),
      staleTime: 1000 * 60 * 5, // minutos
    });
  }

  setCharacterId(characterId: string) {
    this.characterId.set(characterId);
  }

}
