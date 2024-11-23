import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  route = inject(ActivatedRoute);
  characterService = inject(CharacterService);

  characterId = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('id') ?? ''),
      tap((number) => this.characterService.setCharacterId(number))
    )
  );

  characterQuery = this.characterService.charactersQuery;

}
