import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { CardioComponent } from './components/cardio/cardio.component';
import { CardioAltComponent } from './components/cardio-alt/cardio-alt.component';
import { DigestiveSystemComponent } from './components/digestive-system/digestive-system.component';
import { HealthSummaryComponent } from './components/health-summary/health-summary.component';
import { LearnMoreCardioComponent } from './components/learn-more-cardio/learn-more-cardio.component';
import { MetabolismComponent } from './components/metabolism/metabolism.component';
import { NutritionalLevelsComponent } from './components/nutritional-levels/nutritional-levels.component';
import { SystemsCheckComponent } from './components/systems-check/systems-check.component';
import { ToxicMetalsComponent } from './components/toxic-metals/toxic-metals.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    CardioComponent,
    CardioAltComponent,
    DigestiveSystemComponent,
    HealthSummaryComponent,
    LearnMoreCardioComponent,
    MetabolismComponent,
    NutritionalLevelsComponent,
    SystemsCheckComponent,
    ToxicMetalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
