import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { MainComponent } from './main/main.component';
import { PlanComponent } from './main/plan/plan.component';
import { ManuPlansComponent } from './main/menu-plans/menu-plans.component';
import { TestimonialComponent } from './main/testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MainComponent,
    PlanComponent,
    ManuPlansComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
