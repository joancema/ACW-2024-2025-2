import { Component, inject, input } from '@angular/core';
import {  Item } from '../../interfaces/ICharacters';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {
  characters =  input.required<Item[]>();
  characterService = inject(CharacterService);

  prefetchData(number: number) {
    this.characterService.prefetchCharacter(number.toString());
  }

}