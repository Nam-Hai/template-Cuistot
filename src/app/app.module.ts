import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { SplitStringPipe } from './split-string.pipe';
import { CarteComponent } from './carte/carte.component';
import { CarteSectionComponent } from './carte-section/carte-section.component';
import { CarteItemComponent } from './carte-item/carte-item.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MobileNavComponent,
    SplitStringPipe,
    CarteComponent,
    CarteSectionComponent,
    CarteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
