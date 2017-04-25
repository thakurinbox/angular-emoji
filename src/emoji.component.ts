import {Component, OnInit, OnChanges, Input, Output, EventEmitter, Pipe} from '@angular/core';
import { Emotions } from "./default-emotion";

@Component({
  selector: 'emoji-input',
  templateUrl: './emoji.html',
  styleUrls: ['./emoji.css'],
})
export class EmojiComponent implements OnInit, OnChanges  {

  constructor() {}


  @Input() popupAnchor = 'top';
  @Input() onEnter: Function = () => {};
  @Input() model: any;
  @Output() modelChange: any = new EventEmitter();

  input: string;
  filterEmojis: string;
  allEmojis: Array<any>;
  popupOpen: boolean = false;

  ngOnInit() {
    this.input = '';
    this.filterEmojis = '';
    //this.allEmojis = JSON.parse(Emotions);
    this.allEmojis = Object.keys(Emotions).map(key => Emotions[key])
  }

  ngOnChanges() {
    if (this.model !== this.input) {
      this.input = this.model;
    }
  }

  togglePopup() {
    this.popupOpen = !this.popupOpen;
  }

  getFilteredEmojis() {
    return this.allEmojis.filter((e) => {
      if (this.filterEmojis === '') {
        return true;
      } else {
        for (let alias of e.aliases) {
          if (alias.includes(this.filterEmojis)) {
            return true;
          }
        }
      }
      return false;
    });
  }

  onEmojiClick(i, e) {
    this.input = this.input + ' <img src="node_modules/angular-emoji/emoji/png/'+ i + '.png">';
    this.modelChange.emit(this.input);
    this.popupOpen = false;
  }

  onChange(newValue) {
    this.input = ''; //JSON.parse(Emotions);
    this.model = this.input;
    this.modelChange.emit(this.input);
  }

    transform(value: any, args: any[] = null): any {
        return Object.keys(value)//.map(key => value[key]);
    }

}
