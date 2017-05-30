# angular-emoji

This npm is for angular 2+. You can use it for any chat module. By default its using shortcode for emoji recognition. You need to make some tweaks based on your requirement.

## Installation

To install this library, run:

```bash
$ npm install angular-emoji --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-emoji
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { EmojiModule } from 'angular-emoji/dist';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<emoji-input></emoji-input>
```

## Placing emoji icons

Copy emoji icons from /node_modules/angular-emoji/emoji and add to your project at /src/assets/images/emoji and run you angular build


## License

MIT © [Naresh Thakur](mailto:thakurinbox@gmail.com)
