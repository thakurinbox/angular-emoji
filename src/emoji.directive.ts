import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[emojiDirective]'
})
export class EmojiDirective {

  constructor(private el: ElementRef) {
  }

}
