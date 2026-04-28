import {Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  templateUrl: "./hero-page.component.html",
  styleUrls: ['./hero-page.component.css'],
  imports: [UpperCasePipe]
})
export class HeroPageComponent {
  name = signal("Iron Man")
  age = signal(45);

  heroDescription = computed(
    () => `${this.name()} ${this.age()}`
  )
  capitalizedName = computed(() => `${this.name().toUpperCase()}`);

  changeHero(){
    this.name.update(_ =>"Spiderman")
    this.age.update(_ => 20)
  }
  resetForm(){
    this.name.update(_ =>"Iron man")
    this.age.update(_ => 45)

  }
  changeAge(){
    this.age.update(_ => 60)
  }
}
