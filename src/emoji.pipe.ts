import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'emojiPipe'
})
@Injectable()
export class EmojiPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
