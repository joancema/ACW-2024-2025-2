import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persona: IPersona = {
    firstName: 'John',
    lastName: 'Cevallos'
  };

  profileForm = new FormGroup({
    firstName: new FormControl('john'),
    lastName: new FormControl('cevallos'),

  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
  nuevo(){
    this.profileForm.reset();
  }


}
interface IPersona {
  firstName: string;
  lastName: string;
}
