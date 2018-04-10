import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    ForbiddenValidatorDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
