import {Component, inject} from '@angular/core';
import {CharacterListComponent} from '../../components/character-list/character-list.component';
import {CharacterAddComponent} from '../../components/character-add/character-add.component';
import {DragonballService} from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ]
})

export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
