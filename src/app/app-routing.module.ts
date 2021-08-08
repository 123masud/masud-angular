import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardioAltComponent } from './components/cardio-alt/cardio-alt.component';
import { CardioComponent } from './components/cardio/cardio.component';
import { DigestiveSystemComponent } from './components/digestive-system/digestive-system.component';
import { HealthSummaryComponent } from './components/health-summary/health-summary.component';
import { LandingComponent } from './components/landing/landing.component';
import { LearnMoreCardioComponent } from './components/learn-more-cardio/learn-more-cardio.component';
import { MetabolismComponent } from './components/metabolism/metabolism.component';
import { NutritionalLevelsComponent } from './components/nutritional-levels/nutritional-levels.component';
import { SystemsCheckComponent } from './components/systems-check/systems-check.component';
import { ToxicMetalsComponent } from './components/toxic-metals/toxic-metals.component';

const routes: Routes = [
  {path: 'checkpup', component: LandingComponent},
 { path: '', redirectTo: 'checkpup', pathMatch: 'full'},
 {path: 'cardio', component: CardioComponent},
 {path: 'cardio-alt', component: CardioAltComponent},
 {path: 'digestive-system', component: DigestiveSystemComponent},
 {path: 'health-summary', component: HealthSummaryComponent},
 {path: 'learn-more-cardio', component: LearnMoreCardioComponent},
 {path: 'metabolism', component: MetabolismComponent},
 {path: 'nutritional-levels', component: NutritionalLevelsComponent},
 {path: 'systems-check', component: SystemsCheckComponent},
 {path: 'toxic-metals', component: ToxicMetalsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
