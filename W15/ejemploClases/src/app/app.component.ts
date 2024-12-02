import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  contador= signal<number>(1);
  colores = signal<string[]>(['red', 'green', 'blue']);

  nota1 = signal<number>(7);
  nota2 = signal<number>(8);
  promedio = computed( ()=> (this.nota1() + this.nota2()) / 2 );


  constructor(){
    effect( ()=> {
      this.contador.set(10);
      console.log('Efecto 1', this.contador());
    },{
      allowSignalWrites:true
    })
    effect( ()=> {
      console.log('Efecto 2', this.colores());
    })
  }

  incrementar(){
    // this.contador.set(  this.contador() + 1);
    this.contador.update( valor=> valor + 1);

    // this.contador.mutate

    // this.colores.update( colores =>  [...colores, 'yellow']);
    // this.nota1.set(10)
    // console.log(this.colores());

  }


}
