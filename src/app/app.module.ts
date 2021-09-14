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
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AccountComponent } from './components/account/account.component';
import { AddPetsComponent } from './components/add-pets/add-pets.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditAddPetsComponent } from './components/edit-add-pets/edit-add-pets.component';

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
    AboutUsComponent,
    ContactUsComponent,
    AccountComponent,
    AddPetsComponent,
    EditAddPetsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
