import {Component, signal} from '@angular/core';

@Component({
  templateUrl: "./hero-page.component.html",
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent {
  name = signal("Iron Man")
  age = signal(45);

  getName(){
    return `${this.name()}`;
  }
  getAge(){
    return `${this.age()}`;
  }
  changeHero(){
    this.name.update(_ =>"Spiderman")
    this.age.update(_ => 20)
  }
  resetForm(){
    this.name.update(_ =>"Iron man")
    this.age.update(_ => 45)

  }
  getHeroDescription(){
    return `${this.name()} + ": " + ${this.age()}`;
  }
  changeAge(){
    this.age.update(_ => 60)
  }
}
