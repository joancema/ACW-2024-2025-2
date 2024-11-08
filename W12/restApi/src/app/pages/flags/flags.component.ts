import { Component, OnInit } from '@angular/core';
import { FlagsService } from '../../services/flags.service';
import { IFlag } from '../../interfaces/IFlag';
import { ICharacter } from '../../interfaces/ICharacters';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-flags',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './flags.component.html',
  styleUrl: './flags.component.css'
})
export class FlagsComponent {

   flags: IFlag[] = [];
   characters: ICharacter={items:[], meta:{totalItems:0, itemCount:0, itemsPerPage:0, totalPages:0, currentPage:0}, links:{first:'', previous:'', next:'', last:''}};

  constructor(
    private flagsService: FlagsService,
  ) { }

  ngOnInit(){
    this.flagsService.getFlags().subscribe((data) => {
      this.flags = data;
      console.log(this.flags);
    });
    this.flagsService.getCharacters().subscribe((data) => {
      this.characters = data;
      console.log(this.characters);
    });
  }

}
