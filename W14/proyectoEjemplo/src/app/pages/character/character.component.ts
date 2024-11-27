import { Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { CharacterDetailComponent } from '../../components/character-detail/character-detail.component';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [ CharacterDetailComponent ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export default class CharacterComponent {

  charactersService =  inject(CharactersService);

  get characters() {
    return this.charactersService.charactersQuery;
  }


}
