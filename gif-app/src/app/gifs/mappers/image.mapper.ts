import {ImageDTO} from '../interfaces/images.interfaces';
import {Image} from '../interfaces/image.interface';

export class ImageMapper {
  static mapImgDTOToImg(item: ImageDTO): Image {
    return {
      id: item.id,
      url: item.url,
    }
  }

  static mapImgDTOArrayToImageArray(items: ImageDTO[]): Image[] {
    return items.map(this.mapImgDTOToImg);
  }
}
