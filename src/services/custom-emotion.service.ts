import {Injectable} from '@angular/core';
import {Emotions} from '../default-emotion';

@Injectable()
export class CustomEmotionService {

  Emotions: any = [];

  constructor() {
  }

  AddCustomEmotions(emotions: any): void {
    this.Emotions = [...emotions];
  }

  GetEmotions(): any {
    return [...this.Emotions, ...Emotions];
  }

}
