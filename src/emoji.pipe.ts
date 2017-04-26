import { Injectable, PipeTransform, Pipe } from '@angular/core';
import {Emotions} from "./default-emotion";

/**
 * Transforms any input value
 */
@Pipe({
  name: 'emojiPipe'
})
@Injectable()
export class EmojiPipe implements PipeTransform {

  emotions: any;

  constructor() {
    this.emotions = Emotions;
  }

  transform(value: any, args: any[] = null, filterBy: any = null): string {
    if(filterBy == "unicode"){
        for (let key in this.emotions) {
            let re = new RegExp(key, 'ig');
            value = value.replace(re, '<img src="node_modules/angular-emoji/emoji/png/' + key + '.png"' + 'class="emogi-image"' + ' title="' + this.emotions[key].name + '">');
        }
    }else if(filterBy == "image") {
        for (let key in this.emotions) {
            let re = new RegExp(key + ".png", 'ig');
            value = value.replace(re, this.emotions[key].shortname);
        }
    }else{
      for (let key in this.emotions) {
        let re = new RegExp(this.emotions[key].shortname, 'ig');
        value = value.replace(re, '<img src="node_modules/angular-emoji/emoji/png/' + key + '.png"' + 'class="emogi-image"' + ' title="' + this.emotions[key].name + '">');
      }
    }
    return value;
  }
}
