import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // count =0;
  count = signal(0);
  colors = signal<string[]>(['red', 'green', 'blue']);
  largo = signal(10);
  ancho = signal(20);
  area =  computed(() => this.largo() * this.ancho());


  constructor() {
    effect(() => {
      // this.count.set(10);
      console.log('Wich is the count:', this.count());
    },{ allowSignalWrites: true });
    effect(() => {
      console.log('Wich ones are the colors:', this.colors());
    });

  }
  ngOnInit(): void {}

  increase(){
    // this.count++;
    // this.count.set(this.count() + 1);
    this.count.update((prev) => prev + 1);
    this.colors.update (prev => [...prev, 'yellow']);
    console.log(this.colors());
    this.largo.set(50)
  }


}
