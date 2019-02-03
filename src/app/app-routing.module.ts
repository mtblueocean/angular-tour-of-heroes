import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./heroes/heroes.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
