import {Component, signal} from '@angular/core';
import {CharacterListComponent} from '../../components/character-list/character-list.component';
import {Character} from '../../interfaces/character.interface';
import {CharacterAddComponent} from '../../components/character-add/character-add.component';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ]
})

export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'John', power: 1},
    {id: 2, name: 'Joe', power: 9001},
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter])
    this.resetFields()
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
