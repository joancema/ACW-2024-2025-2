import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlagsService } from '../../services/flags.service';
import { ICharacterOne } from '../../interfaces/ICharacter';

@Component({
  selector: 'app-flag',
  standalone: true,
  imports: [],
  templateUrl: './flag.component.html',
  styleUrl: './flag.component.css'
})
export class FlagComponent {

  @Input() id: string = '';

  character: ICharacterOne = {
    id: 0,
    name: '',
    ki: '',
    maxKi: '',
    race: '',
    gender: '',
    description: '',
    image: '',
    affiliation: '',
    deletedAt: null,
    originPlanet: {
        id: 0,
        name: '',
        isDestroyed: false,
        description: '',
        image: '',
        deletedAt: null
    },
    transformations: [
        {
            id: 0,
            name: '',
            image: '',
            ki: '',
            deletedAt: null
        }
    ]
};


  constructor(
    private route: ActivatedRoute,
    private service: FlagsService

   ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.id = params.get('id') || '';
        this.service.getCharacter(this.id).subscribe((data) => {
          this.character = data;
    });
  })
  }


}
