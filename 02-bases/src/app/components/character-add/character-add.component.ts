import {Component, output, signal} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>() //el componente emite algo

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0)
      return;

    const newCharacter: Character = {id: Math.random(), name: this.name(), power: this.power()}
    this.newCharacter.emit(newCharacter)
  }
}
