import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiComponent } from './emoji.component';
import { EmojiDirective } from './emoji.directive';
import { EmojiPipe } from './emoji.pipe';
import { EmojiService } from './emoji.service';

export * from './emoji.component';
export * from './emoji.directive';
export * from './emoji.pipe';
export * from './emoji.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmojiComponent,
    EmojiDirective,
    EmojiPipe
  ],
  exports: [
    EmojiComponent,
    EmojiDirective,
    EmojiPipe
  ]
})
export class EmojiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EmojiModule,
      providers: [EmojiService]
    };
  }
}
