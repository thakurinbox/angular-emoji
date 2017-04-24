import { Injectable, PipeTransform, Pipe } from '@angular/core';
import {CustomEmotionService} from "./services/custom-emotion.service";


/**
 * Transforms any input value
 */
@Pipe({
  name: 'emojiPipe'
})
@Injectable()
export class EmojiPipe implements PipeTransform {

  emotions: any;

  constructor(private customEmotionService: CustomEmotionService) {
    this.emotions = this.customEmotionService.GetEmotions();
  }

  transform(value: any, args: any[] = null, filterBy: any = null): string {
    if(filterBy == "unicode"){
        for (let key in this.emotions) {
            let re = new RegExp(key, 'ig');
            value = value.replace(re, '<img src="' + key + '.png"' + 'class="emogi-image"' + ' title="' + this.emotions[key].name + '">');
        }
    }else{
      for (let key in this.emotions) {
        let re = new RegExp(this.emotions[key].shortname, 'ig');
        value = value.replace(re, '<img src="' + key + '.png"' + 'class="emogi-image"' + ' title="' + this.emotions[key].name + '">');
      }
    }
    return value;
  }
}
