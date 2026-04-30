import {Component, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'gif-list-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {
  image = input.required<string>();
}
