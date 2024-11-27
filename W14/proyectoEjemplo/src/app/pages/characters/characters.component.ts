import { Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { CharacterDetailComponent } from '../../components/character-detail/character-detail.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [ CharacterDetailComponent ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export default class CharactersComponent {

  charactersService =  inject(CharactersService);

  get characters() {
    return this.charactersService.charactersQuery;
  }


}
