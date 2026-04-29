import {Component, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  templateUrl: './dragonball-page.component.html',
  imports: []
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 2, name: 'Goku', power: 9001},
  ]);

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0)
      return;

    this.characters.update((list) => [...list, {id: Math.random(), name: this.name(), power: this.power()}])
    this.resetFields()
  }
}
