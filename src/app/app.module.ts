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
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ViewComponent } from './view/view.component';
import { ExtraOptions, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'Menu', component: CarteComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 1],
};


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MobileNavComponent,
    SplitStringPipe,
    CarteComponent,
    CarteSectionComponent,
    CarteItemComponent,
    FooterComponent,
    MainContentComponent,
    ViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, routerOptions),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
