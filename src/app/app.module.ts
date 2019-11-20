import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillTrainingComponent } from './training/skill-training/skill-training.component';
import { LevelSelectorComponent } from './training/level-selector/level-selector.component';
import { GlowButtonComponent } from './helper/glow-button/glow-button.component';
import { TitleHeaderComponent } from './common/title-header/title-header.component';
import { LevelComponent } from './training/level/level.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    SkillTrainingComponent,
    LevelSelectorComponent,
    GlowButtonComponent,
    TitleHeaderComponent,
    LevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
