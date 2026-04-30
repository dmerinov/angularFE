import {inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import type {ImageListResponse} from '../interfaces/images.interfaces';
import {Image} from '../interfaces/image.interface';
import {ImageMapper} from '../mappers/image.mapper';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ImageService {

  trendingImgs = signal<Image[]>([]);
  trendingImgsLoading = signal(true)
  private http = inject(HttpClient)

  constructor() {
    this.loadTrendingCats()
  }

  loadTrendingCats() {
    //'https://api.thecatapi.com/v1'
    const params = new HttpParams({
      fromObject: {
        limit: '10'
      }
    });
    this.trendingImgsLoading.set(true);
    this.http
      .get<ImageListResponse>(
        `${environment.BASE_URL}images/search`,
        {
          params
        }
      )
      .subscribe((response) => {
        const imgs = ImageMapper.mapImgDTOArrayToImageArray(response);
        console.log(imgs);
        this.trendingImgs.set(imgs);
        this.trendingImgsLoading.set(false);
      });
  }
}
